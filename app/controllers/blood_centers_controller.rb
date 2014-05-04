class BloodCentersController < ApplicationController
  before_action :set_blood_center, only: [:show, :edit, :update, :destroy]

  # GET /blood_centers
  # GET /blood_centers.json
  def index
    @blood_centers = BloodCenter.all
  end

  # GET /blood_centers/1
  # GET /blood_centers/1.json
  def show
  end

  # GET /blood_centers/new
  def new
    @blood_center = BloodCenter.new
  end

  # GET /blood_centers/1/edit
  def edit
  end

  # POST /blood_centers
  # POST /blood_centers.json
  def create
    @blood_center = BloodCenter.new(blood_center_params)

    respond_to do |format|
      if @blood_center.save
        format.html { redirect_to @blood_center, notice: 'Blood center was successfully created.' }
        format.json { render action: 'show', status: :created, location: @blood_center }
      else
        format.html { render action: 'new' }
        format.json { render json: @blood_center.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /blood_centers/1
  # PATCH/PUT /blood_centers/1.json
  def update
    respond_to do |format|
      if @blood_center.update(blood_center_params)
        format.html { redirect_to @blood_center, notice: 'Blood center was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @blood_center.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /blood_centers/1
  # DELETE /blood_centers/1.json
  def destroy
    @blood_center.destroy
    respond_to do |format|
      format.html { redirect_to blood_centers_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_blood_center
      @blood_center = BloodCenter.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def blood_center_params
      params.require(:blood_center).permit(:centerID)
    end
end
