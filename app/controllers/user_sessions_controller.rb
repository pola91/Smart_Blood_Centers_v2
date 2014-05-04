class UserSessionsController < ApplicationController
  before_filter :require_no_user, :only => [:new, :create]
  before_filter :require_user, :only => :destroy
  
  
  def new
    @user_session = UserSession.new
  end
  
  def create
    @user_session = UserSession.new(params[:user_session])
    if @user_session.save
      flash[:notice] = "Login successful!"
      user = User.find_by(:login => params[:user_session][:login])
      
      if user.type == "AdminOfficer"
        redirect_to admins_officers_path
      elsif user.type == "ManagerOfficer"
        redirect_to managers_view_reports_path
      elsif user.type == "DataEntryOfficer"
        redirect_to data_entries_withdraw_path
      else 
        redirect_to registered_users_profile_path
      end 
      #redirect_back_or_default managers_sent_requests_path #registered_users_profile_path
    else
      render :controller => welcome , :action => :index
    end
  end
  
  def destroy
    current_user_session.destroy
    flash[:notice] = "Logout successful!"
    redirect_back_or_default new_user_session_url
  end
end
