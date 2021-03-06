class UsersController < ApplicationController
  before_filter :require_no_user, :only => [:new, :create]
  before_filter :require_user, :only => [:show, :edit, :update]
  
  def new
    @user = User.new
  end
  
  def create
    params[:user][:type] ||= 'RegisteredUser'
    @user = User.new(params[:user])
    if @user.type == 'RegisteredUser'
      @user.mobile = params[:user][:mobile]
      @user.telephone = params[:user][:telephone]
      @user.dateOfBirth = params[:user][:dateOfBirth]
    end
    if @user.save
      flash[:notice] = "Account registered!"
      redirect_back_or_default home_path
    else
      render :action => :new
    end
  end
  
  def show
    @user = @current_user
    if @user.type == 'ManagerOfficer'
      redirect_to '/managers/view_reports'
    elsif
      @user.type == 'DataEntryOfficer'
      redirect_to '/data_entries/withdraw'
    elsif
      @user.type == 'AdminOfficer'
      redirect_to '/admins/officers'
    else 
      redirect_to '/registered_users/profile'
    end
  end

  def edit
    @user = User.find(params[:id])  
  end
  
  def update
    @user = User.find_by(login: params[:registered_user][:login])  
    if @user.update_attributes(params[:registered_user])
      flash[:notice] = "Account updated!"
      redirect_to registered_users_profile_path
    else
      render :action => :edit
    end
  end
  
  def destroy
  end
end
