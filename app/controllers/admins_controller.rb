class AdminsController < ApplicationController

  before_filter :require_no_user, :only => [:new, :create]
  before_filter :require_user, :only => [:show, :edit, :update]

  def officers
    @user = User.new
  end

  def blood_centers
  end

  
  def new
    @user = User.new
  end
  
  def create
    @user = User.new(params[:user])
    if @user.save
      flash[:notice] = "Account registered!"
      redirect_back_or_default admins_officers_path
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
    @user = @current_user
  end
  
  def update
    @user = @current_user # makes our views "cleaner" and more consistent
    if @user.update_attributes(params[:user])
      flash[:notice] = "Account updated!"
      redirect_to registered_users_profile_path
    else
      render :action => :edit
    end
  end
end

