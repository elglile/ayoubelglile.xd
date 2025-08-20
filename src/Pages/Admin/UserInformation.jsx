import React, { useState, useEffect } from 'react';
import { Edit, Save, X, Upload, Plus } from 'lucide-react';
import { MyInfo } from "../../Data";

// Badge Component
const Badge = ({ children, variant = 'default' }) => {
  const variants = {
    default: 'bg-gray-100 text-gray-800 border border-gray-200',
    blue: 'bg-blue-50 text-blue-700 border border-blue-200',
    green: 'bg-green-50 text-green-700 border border-green-200'
  };
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-md text-sm ${variants[variant]}`}>
      {children}
    </span>
  );
};

// Extracted Functions
const handleJobTitleChange = (title, checked, tempCareerFocus1, setTempCareerFocus1) => {
  const newCareerFocus1 = tempCareerFocus1.map(item => 
    item.title === title 
      ? { ...item, selected: checked ? 1 : 0 }
      : item
  );
  setTempCareerFocus1(newCareerFocus1);
};

const handlePersonalSave = (tempCareerFocus1, setOriginalData, onSave) => {
  MyInfo[0].careerFocus1 = tempCareerFocus1.map(item => ({ ...item }));
  const selectedTitles = tempCareerFocus1
    .filter(item => item.selected === 1)
    .map(item => item.title);
  MyInfo[0].careerFocus = selectedTitles;
  
  setOriginalData(null);
  onSave();
};

const handlePersonalCancel = (originalData, setTempCareerFocus1, setOriginalData, onCancel) => {
  if (originalData) {
    MyInfo[0].fullName = originalData.fullName;
    MyInfo[0].careerFocus1 = originalData.careerFocus1.map(item => ({ ...item }));
    MyInfo[0].profileImage = originalData.profileImage;
    MyInfo[0].cvLink = originalData.cvLink;
    MyInfo[0].cvLink_Français = originalData.cvLink_Français;
    
    const selectedTitles = originalData.careerFocus1
      .filter(item => item.selected === 1)
      .map(item => item.title);
    MyInfo[0].careerFocus = selectedTitles;
    
    setTempCareerFocus1(originalData.careerFocus1.map(item => ({ ...item })));
    setOriginalData(null);
  }
  onCancel();
};

const getCurrentCareerFocus1 = (isEditing, tempCareerFocus1, careerFocus1) => {
  return isEditing && tempCareerFocus1.length > 0 ? tempCareerFocus1 : careerFocus1 || [];
};

const handleInputChange = (field, value, setTempAboutData) => {
  setTempAboutData(prev => ({
    ...prev,
    [field]: value
  }));
};

const handleLanguagesChange = (value, setTempAboutData) => {
  const languagesArray = value.split(',').map(lang => lang.trim()).filter(lang => lang);
  handleInputChange('languages', languagesArray, setTempAboutData);
};

const addStrength = (tempAboutData, aboutMe, setTempAboutData) => {
  const currentStrengths = [...(tempAboutData?.strengths || aboutMe[3].strengths)];
  currentStrengths.push('');
  handleInputChange('strengths', currentStrengths, setTempAboutData);
};

const updateStrength = (index, value, tempAboutData, aboutMe, setTempAboutData) => {
  const currentStrengths = [...(tempAboutData?.strengths || aboutMe[3].strengths)];
  currentStrengths[index] = value;
  handleInputChange('strengths', currentStrengths, setTempAboutData);
};

const removeStrength = (index, tempAboutData, aboutMe, setTempAboutData) => {
  const currentStrengths = (tempAboutData?.strengths || aboutMe[3].strengths).filter((_, i) => i !== index);
  handleInputChange('strengths', currentStrengths, setTempAboutData);
};

const handleAboutSave = (tempAboutData, setOriginalAboutData, setTempAboutData, onSave) => {
  if (tempAboutData) {
    MyInfo[0].aboutMe[0].paragraph = tempAboutData.intro;
    MyInfo[0].aboutMe[1].paragraph = tempAboutData.secondIntro;
    MyInfo[0].aboutMe[2].info.Age = tempAboutData.age;
    MyInfo[0].aboutMe[2].info.Address = tempAboutData.location;
    MyInfo[0].aboutMe[2].info.Phone = tempAboutData.phone;
    MyInfo[0].aboutMe[2].info.Email = tempAboutData.email;
    MyInfo[0].aboutMe[2].info.From = tempAboutData.from;
    MyInfo[0].aboutMe[2].info.Languages = [...tempAboutData.languages];
    MyInfo[0].aboutMe[3].strengths = [...tempAboutData.strengths];
  }
  
  setOriginalAboutData(null);
  setTempAboutData(null);
  onSave();
};

const handleAboutCancel = (originalAboutData, setOriginalAboutData, setTempAboutData, onCancel) => {
  if (originalAboutData) {
    MyInfo[0].aboutMe[0].paragraph = originalAboutData.intro;
    MyInfo[0].aboutMe[1].paragraph = originalAboutData.secondIntro;
    MyInfo[0].aboutMe[2].info.Age = originalAboutData.age;
    MyInfo[0].aboutMe[2].info.Address = originalAboutData.location;
    MyInfo[0].aboutMe[2].info.Phone = originalAboutData.phone;
    MyInfo[0].aboutMe[2].info.Email = originalAboutData.email;
    MyInfo[0].aboutMe[2].info.From = originalAboutData.from;
    MyInfo[0].aboutMe[2].info.Languages = [...originalAboutData.languages];
    MyInfo[0].aboutMe[3].strengths = [...originalAboutData.strengths];
    
    setOriginalAboutData(null);
    setTempAboutData(null);
  }
  onCancel();
};

const getCurrentAboutData = (isEditing, tempAboutData, aboutMe) => {
  if (isEditing && tempAboutData) {
    return tempAboutData;
  }
  return {
    intro: aboutMe[0].paragraph,
    secondIntro: aboutMe[1].paragraph,
    age: aboutMe[2].info.Age,
    location: aboutMe[2].info.Address,
    phone: aboutMe[2].info.Phone,
    email: aboutMe[2].info.Email,
    from: aboutMe[2].info.From,
    languages: aboutMe[2].info.Languages,
    strengths: aboutMe[3].strengths
  };
};

const switchTab = (tabName, setActiveTab, currentEditingSection, setCurrentEditingSection) => {
  setActiveTab(tabName);
  if (currentEditingSection) {
    setCurrentEditingSection(null);
  }
};

const handleEdit = (section, setCurrentEditingSection) => {
  setCurrentEditingSection(section);
};

const handleSave = (setCurrentEditingSection) => {
  setCurrentEditingSection(null);
  alert('Changes saved successfully!');
};

const handleCancel = (setCurrentEditingSection) => {
  setCurrentEditingSection(null);
};

// Personal Information Component
const PersonalInformation = ({ isEditing, onEdit, onSave, onCancel }) => {
  const [originalData, setOriginalData] = useState(null);
  const [tempCareerFocus1, setTempCareerFocus1] = useState([]);

  // When editing starts, store original data
  useEffect(() => {
    if (isEditing && !originalData) {
      setOriginalData({
        fullName: MyInfo[0].fullName,
        careerFocus1: MyInfo[0].careerFocus1.map(item => ({ ...item })),
        profileImage: MyInfo[0].profileImage,
        cvLink: MyInfo[0].cvLink,
        cvLink_Français: MyInfo[0].cvLink_Français
      });
      setTempCareerFocus1(MyInfo[0].careerFocus1.map(item => ({ ...item })));
    }
  }, [isEditing, originalData]);

  const { fullName, profileImage, cvLink, careerFocus1, cvLink_Français } = MyInfo[0];
  const currentCareerFocus1 = getCurrentCareerFocus1(isEditing, tempCareerFocus1, careerFocus1);
  const selectedTitles = currentCareerFocus1
    .filter(item => item.selected === 1)
    .map(item => item.title);

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>
          <p className="text-sm text-gray-500 mt-1">Manage your basic personal details</p>
        </div>
        {!isEditing && (
          <button
            onClick={onEdit}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Edit className="w-4 h-4" />
            Edit
          </button>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {!isEditing ? (
          // View Mode
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-3">Profile Photo</label>
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover rounded-lg" />
                ) : (
                  <Upload className="w-6 h-6 text-gray-400" />
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">Full Name</label>
              <p className="text-gray-900">{fullName}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 mb-3">Job Titles</label>
              <div className="flex flex-wrap gap-2">
                {selectedTitles && selectedTitles.length > 0 ? (
                  selectedTitles.map((title, index) => (
                    <Badge key={index}>{title}</Badge>
                  ))
                ) : (
                  <p className="text-gray-400 text-sm">No job titles selected</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">CV (French)</label>
                <p className="text-gray-900">
                  {cvLink_Français ? (
                    <a href={cvLink_Français} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                      View French CV
                    </a>
                  ) : (
                    "No file uploaded"
                  )}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">CV (English)</label>
                <p className="text-gray-900">
                  {cvLink ? (
                    <a href={cvLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                      View English CV
                    </a>
                  ) : (
                    "No file uploaded"
                  )}
                </p>
              </div>
            </div>
          </div>
        ) : (
          // Edit Mode
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Profile Photo</label>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover rounded-lg" />
                  ) : (
                    <Upload className="w-6 h-6 text-gray-400" />
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      MyInfo[0].profileImage = URL.createObjectURL(file);
                    }
                  }}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                value={fullName || ''}
                onChange={(e) => {
                  MyInfo[0].fullName = e.target.value;
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Job Titles</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentCareerFocus1.map((item, index) => {
                  const isChecked = item.selected === 1;
                  const isCustom = item.title.includes('(Custom)');
                  
                  return (
                    <label key={index} className={`flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 ${isCustom ? 'bg-blue-50 border border-blue-200' : ''}`}>
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => handleJobTitleChange(item.title, e.target.checked, tempCareerFocus1, setTempCareerFocus1)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className={`text-sm ${isCustom ? 'text-blue-700 font-medium' : 'text-gray-700'}`}>
                        {item.title}
                      </span>
                    </label>
                  );
                })}
              </div>
              
              {selectedTitles && selectedTitles.length > 0 && (
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-medium text-green-900 mb-2">Currently Selected ({selectedTitles.length}):</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedTitles.map((title, index) => (
                      <Badge key={index} variant="green">{title}</Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">CV (French)</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) MyInfo[0].cvLink_Français = URL.createObjectURL(file);
                  }}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
                />
                {cvLink_Français && (
                  <p className="text-sm text-green-600 mt-1">✓ French CV uploaded</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">CV (English)</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) MyInfo[0].cvLink = URL.createObjectURL(file);
                  }}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
                />
                {cvLink && (
                  <p className="text-sm text-green-600 mt-1">✓ English CV uploaded</p>
                )}
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-gray-200">
              <button
                onClick={() => handlePersonalSave(tempCareerFocus1, setOriginalData, onSave)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <Save className="w-4 h-4" />
                Save Changes
              </button>
              <button
                onClick={() => handlePersonalCancel(originalData, setTempCareerFocus1, setOriginalData, onCancel)}
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// About Me Component
const AboutMe = ({ isEditing, onEdit, onSave, onCancel }) => {
  const { aboutMe } = MyInfo[0];
  const [originalAboutData, setOriginalAboutData] = useState(null);
  const [tempAboutData, setTempAboutData] = useState(null);

  useEffect(() => {
    if (isEditing && !originalAboutData) {
      const originalData = {
        intro: aboutMe[0].paragraph,
        secondIntro: aboutMe[1].paragraph,
        age: aboutMe[2].info.Age,
        location: aboutMe[2].info.Address,
        phone: aboutMe[2].info.Phone,
        email: aboutMe[2].info.Email,
        from: aboutMe[2].info.From,
        languages: [...aboutMe[2].info.Languages],
        strengths: [...aboutMe[3].strengths]
      };
      setOriginalAboutData(originalData);
      setTempAboutData(originalData);
    }
  }, [isEditing, originalAboutData, aboutMe]);

  const currentData = getCurrentAboutData(isEditing, tempAboutData, aboutMe);

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">About Me</h2>
          <p className="text-sm text-gray-500 mt-1">Manage your detailed information and strengths</p>
        </div>
        {!isEditing && (
          <button
            onClick={onEdit}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Edit className="w-4 h-4" />
            Edit
          </button>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {!isEditing ? (
          // View Mode
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">First Introduction</label>
              <p className="text-gray-900 leading-relaxed">{currentData.intro}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">Second Introduction</label>
              <p className="text-gray-900 leading-relaxed">{currentData.secondIntro}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">Age</label>
                <p className="text-gray-900">{currentData.age}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">Address</label>
                <p className="text-gray-900">{currentData.location}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">Phone</label>
                <p className="text-gray-900">{currentData.phone}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">Email</label>
                <p className="text-gray-900">{currentData.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">From</label>
                <p className="text-gray-900">{currentData.from}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-3">Languages</label>
                <div className="flex flex-wrap gap-2">
                  {currentData.languages.map((language, index) => (
                    <Badge key={index} variant="green">{language}</Badge>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 mb-3">Strengths</label>
              <div className="flex flex-wrap gap-2">
                {currentData.strengths.map((s, index) => (
                  <Badge key={index} variant="blue">{s}</Badge>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Edit Mode
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Introduction</label>
              <textarea
                rows="3"
                value={currentData.intro}
                onChange={(e) => handleInputChange('intro', e.target.value, setTempAboutData)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Second Introduction</label>
              <textarea
                rows="3"
                value={currentData.secondIntro}
                onChange={(e) => handleInputChange('secondIntro', e.target.value, setTempAboutData)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                <input
                  type="text"
                  value={currentData.age}
                  onChange={(e) => handleInputChange('age', e.target.value, setTempAboutData)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <input
                  type="text"
                  value={currentData.location}
                  onChange={(e) => handleInputChange('location', e.target.value, setTempAboutData)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="text"
                  value={currentData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value, setTempAboutData)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={currentData.email}
                  onChange={(e) => handleInputChange('email', e.target.value, setTempAboutData)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                <input
                  type="text"
                  value={currentData.from}
                  onChange={(e) => handleInputChange('from', e.target.value, setTempAboutData)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Languages (comma-separated)</label>
                <input
                  type="text"
                  value={currentData.languages.join(', ')}
                  onChange={(e) => handleLanguagesChange(e.target.value, setTempAboutData)}
                  placeholder="French, English, Spanish..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Strengths</label>
              <div className="space-y-3">
                {currentData.strengths.map((strength, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={strength}
                      onChange={(e) => updateStrength(index, e.target.value, tempAboutData, aboutMe, setTempAboutData)}
                      placeholder="Enter a strength..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => removeStrength(index, tempAboutData, aboutMe, setTempAboutData)}
                      className="px-3 py-2 text-red-600 hover:text-red-800 border border-red-200 rounded-md hover:bg-red-50"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              <button
                onClick={() => addStrength(tempAboutData, aboutMe, setTempAboutData)}
                className="w-full mt-3 py-2 border-2 border-dashed border-gray-300 text-gray-600 rounded-md hover:border-blue-300 hover:text-blue-600 flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add New Strength
              </button>
            </div>

            <div className="flex gap-3 pt-4 border-t border-gray-200">
              <button
                onClick={() => handleAboutSave(tempAboutData, setOriginalAboutData, setTempAboutData, onSave)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <Save className="w-4 h-4" />
                Save Changes
              </button>
              <button
                onClick={() => handleAboutCancel(originalAboutData, setOriginalAboutData, setTempAboutData, onCancel)}
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Skills Component with CRUD operations
const SkillsManager = ({ isEditing, onEdit, onSave, onCancel }) => {
  const [skills, setSkills] = useState(MyInfo[0].MySkills || []);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('add'); // 'add' or 'edit'
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    src: '',
    type: 'Frontend',
    desc: 'Lorem ipsum dolor sit amet consectetur.'
  });

  const skillTypes = ['Frontend', 'Backend', 'Database', 'Tool'];

  const handleAddSkill = () => {
    setModalMode('add');
    setFormData({ name: '', src: '', type: 'Frontend', desc: 'Lorem ipsum dolor sit amet consectetur.' });
    setShowModal(true);
  };

  const handleEditSkill = (skill) => {
    setModalMode('edit');
    setSelectedSkill(skill);
    setFormData({
      name: skill.name,
      src: skill.src,
      type: skill.type,
      desc: skill.desc
    });
    setShowModal(true);
  };

  const handleDeleteSkill = (skillId) => {
    if (window.confirm('Are you sure you want to delete this skill?')) {
      const updatedSkills = skills.filter(skill => skill.id !== skillId);
      setSkills(updatedSkills);
      MyInfo[0].MySkills = updatedSkills;
      onSave();
    }
  };

  const handleSaveSkill = () => {
    if (modalMode === 'add') {
      const newSkill = {
        id: Date.now(),
        ...formData
      };
      const updatedSkills = [...skills, newSkill];
      setSkills(updatedSkills);
      MyInfo[0].MySkills = updatedSkills;
    } else {
      const updatedSkills = skills.map(skill => 
        skill.id === selectedSkill.id ? { ...skill, ...formData } : skill
      );
      setSkills(updatedSkills);
      MyInfo[0].MySkills = updatedSkills;
    }
    setShowModal(false);
    onSave();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, src: URL.createObjectURL(file) }));
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">My Skills</h2>
          <p className="text-sm text-gray-500 mt-1">Manage your technical skills and tools</p>
        </div>
        <button
          onClick={handleAddSkill}
          className="inline-flex items-center gap-2 px-3 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Skill
        </button>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div key={skill.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-lg flex items-center justify-center">
                {skill.src ? (
                  <img src={skill.src} alt={skill.name} className="w-full h-full object-cover rounded-lg" />
                ) : (
                  <Upload className="w-6 h-6 text-gray-400" />
                )}
              </div>
              <h3 className="text-center font-medium text-gray-900 mb-1">{skill.name}</h3>
              <p className="text-center text-sm text-gray-500 mb-3">{skill.type}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEditSkill(skill)}
                  className="flex-1 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteSkill(skill.id)}
                  className="flex-1 text-xs bg-red-100 text-red-700 px-2 py-1 rounded hover:bg-red-200"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">
              {modalMode === 'add' ? 'Add New Skill' : 'Edit Skill'}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Skill Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="e.g., React"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Skill Icon</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {formData.src && (
                  <img src={formData.src} alt="Preview" className="mt-2 w-16 h-16 object-cover rounded" />
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  {skillTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSaveSkill}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Save
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Projects Component with CRUD operations
const ProjectsManager = ({ isEditing, onEdit, onSave, onCancel }) => {
  const [projects, setProjects] = useState(MyInfo[0].MY_PROJECT || []);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({
    Dashbord_web_App_name: '',
    image_src: '',
    description: '',
    Figmalink: { link: '' },
    Gitlink: { link: '' },
    dimolink: { link: '' },
    languages_prog: { language1: '', language2: '', language3: '' }
  });

  const availableSkills = MyInfo[0].MySkills.map(skill => skill.name);

  const handleAddProject = () => {
    setModalMode('add');
    setFormData({
      Dashbord_web_App_name: '',
      image_src: '',
      description: '',
      Figmalink: { link: '' },
      Gitlink: { link: '' },
      dimolink: { link: '' },
      languages_prog: { language1: '', language2: '', language3: '' }
    });
    setShowModal(true);
  };

  const handleEditProject = (project) => {
    setModalMode('edit');
    setSelectedProject(project);
    setFormData({
      Dashbord_web_App_name: project.Dashbord_web_App_name,
      image_src: project.image_src,
      description: project.description,
      Figmalink: project.Figmalink,
      Gitlink: project.Gitlink,
      dimolink: project.dimolink,
      languages_prog: project.languages_prog
    });
    setShowModal(true);
  };

  const handleDeleteProject = (projectId) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      const updatedProjects = projects.filter(project => project.id !== projectId);
      setProjects(updatedProjects);
      MyInfo[0].MY_PROJECT = updatedProjects;
      onSave();
    }
  };

  const handleSaveProject = () => {
    if (modalMode === 'add') {
      const newProject = {
        id: Date.now(),
        ...formData
      };
      const updatedProjects = [...projects, newProject];
      setProjects(updatedProjects);
      MyInfo[0].MY_PROJECT = updatedProjects;
    } else {
      const updatedProjects = projects.map(project => 
        project.id === selectedProject.id ? { ...project, ...formData } : project
      );
      setProjects(updatedProjects);
      MyInfo[0].MY_PROJECT = updatedProjects;
    }
    setShowModal(false);
    onSave();
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">My Projects</h2>
          <p className="text-sm text-gray-500 mt-1">Manage your portfolio projects</p>
        </div>
        <button
          onClick={handleAddProject}
          className="inline-flex items-center gap-2 px-3 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Project
        </button>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-100">
                {project.image_src ? (
                  <img src={project.image_src} alt={project.Dashbord_web_App_name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Upload className="w-8 h-8 text-gray-400" />
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{project.Dashbord_web_App_name}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{project.description}</p>
                <div className="flex gap-2 mb-3">
                  {Object.values(project.languages_prog).filter(Boolean).map((lang, idx) => (
                    <Badge key={idx} variant="green">{lang}</Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditProject(project)}
                    className="flex-1 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProject(project.id)}
                    className="flex-1 text-xs bg-red-100 text-red-700 px-2 py-1 rounded hover:bg-red-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">
              {modalMode === 'add' ? 'Add New Project' : 'Edit Project'}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
                <input
                  type="text"
                  value={formData.Dashbord_web_App_name}
                  onChange={(e) => setFormData({ ...formData, Dashbord_web_App_name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) setFormData({ ...formData, image_src: URL.createObjectURL(file) });
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  rows="3"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Figma Link</label>
                  <input
                    type="url"
                    value={formData.Figmalink.link}
                    onChange={(e) => setFormData({ ...formData, Figmalink: { ...formData.Figmalink, link: e.target.value } })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="https://figma.com/..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">GitHub Link</label>
                  <input
                    type="url"
                    value={formData.Gitlink.link}
                    onChange={(e) => setFormData({ ...formData, Gitlink: { ...formData.Gitlink, link: e.target.value } })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="https://github.com/..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Link</label>
                  <input
                    type="url"
                    value={formData.dimolink.link}
                    onChange={(e) => setFormData({ ...formData, dimolink: { ...formData.dimolink, link: e.target.value } })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="https://..."
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Languages Used</label>
                <div className="grid grid-cols-3 gap-2">
                  {['language1', 'language2', 'language3'].map((langKey, idx) => (
                    <select
                      key={idx}
                      value={formData.languages_prog[langKey]}
                      onChange={(e) => setFormData({
                        ...formData,
                        languages_prog: { ...formData.languages_prog, [langKey]: e.target.value }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="">Select {idx + 1}</option>
                      {availableSkills.map(skill => (
                        <option key={skill} value={skill}>{skill}</option>
                      ))}
                    </select>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSaveProject}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Save
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Services Component with CRUD operations
const ServicesManager = ({ isEditing, onEdit, onSave, onCancel }) => {
  const [services, setServices] = useState(MyInfo[0].Myservices || []);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    icon: 'Code',
    description: ''
  });

  const iconOptions = ['Code', 'Palette', 'Building2', 'Smartphone', 'Globe', 'Database'];

  const handleAddService = () => {
    setModalMode('add');
    setFormData({ title: '', icon: 'Code', description: '' });
    setShowModal(true);
  };

  const handleEditService = (service) => {
    setModalMode('edit');
    setSelectedService(service);
    setFormData({
      title: service.title,
      icon: service.icon,
      description: service.description
    });
    setShowModal(true);
  };

  const handleDeleteService = (serviceIndex) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      const updatedServices = services.filter((_, index) => index !== serviceIndex);
      setServices(updatedServices);
      MyInfo[0].Myservices = updatedServices;
      onSave();
    }
  };

  const handleSaveService = () => {
    if (modalMode === 'add') {
      const newService = {
        ...formData
      };
      const updatedServices = [...services, newService];
      setServices(updatedServices);
      MyInfo[0].Myservices = updatedServices;
    } else {
      const updatedServices = services.map((service, index) => 
        index === selectedService ? { ...service, ...formData } : service
      );
      setServices(updatedServices);
      MyInfo[0].Myservices = updatedServices;
    }
    setShowModal(false);
    onSave();
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">My Services</h2>
          <p className="text-sm text-gray-500 mt-1">Manage the services you offer</p>
        </div>
        <button
          onClick={handleAddService}
          className="inline-flex items-center gap-2 px-3 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Service
        </button>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditService(index)}
                    className="flex-1 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteService(index)}
                    className="flex-1 text-xs bg-red-100 text-red-700 px-2 py-1 rounded hover:bg-red-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">
              {modalMode === 'add' ? 'Add New Service' : 'Edit Service'}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Name</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="e.g., Web Development"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Icon</label>
                <select
                  value={formData.icon}
                  onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  {iconOptions.map(icon => (
                    <option key={icon} value={icon}>{icon}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  rows="3"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSaveService}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Save
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Contact Manager Component
const ContactManager = ({ isEditing, onEdit, onSave, onCancel }) => {
  const [contactInfo, setContactInfo] = useState({
    email: MyInfo[0].aboutMe[2].info.Email,
    phone: MyInfo[0].aboutMe[2].info.Phone,
    address: MyInfo[0].aboutMe[2].info.Address
  });

  const handleSave = () => {
    MyInfo[0].aboutMe[2].info.Email = contactInfo.email;
    MyInfo[0].aboutMe[2].info.Phone = contactInfo.phone;
    MyInfo[0].aboutMe[2].info.Address = contactInfo.address;
    onSave();
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Contact Information</h2>
          <p className="text-sm text-gray-500 mt-1">Manage your contact details</p>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              value={contactInfo.email}
              onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              value={contactInfo.phone}
              onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
            <input
              type="text"
              value={contactInfo.address}
              onChange={(e) => setContactInfo({ ...contactInfo, address: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

// Social Links Manager Component
const SocialLinksManager = ({ isEditing, onEdit, onSave, onCancel }) => {
  const [socialLinks, setSocialLinks] = useState(MyInfo[0].socialLinks || []);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [selectedLink, setSelectedLink] = useState(null);
  const [formData, setFormData] = useState({
    platform: '',
    link: '',
    username: ''
  });

  const platforms = [
    { name: 'GitHub', icon: 'github' },
    { name: 'LinkedIn', icon: 'linkedin' },
    { name: 'Instagram', icon: 'instagram' },
    { name: 'Twitter', icon: 'twitter' },
    { name: 'Facebook', icon: 'facebook' },
    { name: 'Behance', icon: 'behance' }
  ];

  const handleAddSocialLink = () => {
    setModalMode('add');
    setFormData({ platform: '', link: '', username: '' });
    setShowModal(true);
  };

  const handleEditSocialLink = (link, index) => {
    setModalMode('edit');
    setSelectedLink(index);
    const platform = Object.keys(link).find(key => platforms.some(p => p.name.toLowerCase() === key.toLowerCase()));
    setFormData({
      platform: platform || '',
      link: link.link || '',
      username: link[platform] || ''
    });
    setShowModal(true);
  };

  const handleDeleteSocialLink = (index) => {
    if (window.confirm('Are you sure you want to delete this social link?')) {
      const updatedLinks = socialLinks.filter((_, i) => i !== index);
      setSocialLinks(updatedLinks);
      MyInfo[0].socialLinks = updatedLinks;
      onSave();
    }
  };

  const handleSaveSocialLink = () => {
    const platformKey = formData.platform.toLowerCase();
    const newLink = {
      id: Date.now(),
      [platformKey]: formData.username,
      link: formData.link
    };

    if (modalMode === 'add') {
      const updatedLinks = [...socialLinks, newLink];
      setSocialLinks(updatedLinks);
      MyInfo[0].socialLinks = updatedLinks;
    } else {
      const updatedLinks = socialLinks.map((link, index) => 
        index === selectedLink ? newLink : link
      );
      setSocialLinks(updatedLinks);
      MyInfo[0].socialLinks = updatedLinks;
    }
    setShowModal(false);
    onSave();
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Social Links</h2>
          <p className="text-sm text-gray-500 mt-1">Manage your social media profiles</p>
        </div>
        <button
          onClick={handleAddSocialLink}
          className="inline-flex items-center gap-2 px-3 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Link
        </button>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {socialLinks.map((link, index) => {
            const platform = Object.keys(link).find(key => 
              key !== 'id' && key !== 'link' && key !== 'icoo'
            );
            return (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900 capitalize">{platform}</h4>
                    <a href={link.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm hover:underline">
                      {link[platform]}
                    </a>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditSocialLink(link, index)}
                      className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteSocialLink(index)}
                      className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded hover:bg-red-200"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">
              {modalMode === 'add' ? 'Add Social Link' : 'Edit Social Link'}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Platform</label>
                <select
                  value={formData.platform}
                  onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select Platform</option>
                  {platforms.map(platform => (
                    <option key={platform.name} value={platform.name}>{platform.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="your-username"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Profile URL</label>
                <input
                  type="url"
                  value={formData.link}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="https://..."
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSaveSocialLink}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Save
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Resume/Experience Manager Component
const ResumeManager = ({ isEditing, onEdit, onSave, onCancel }) => {
  const [experiences, setExperiences] = useState(MyInfo[0].Myexperiences || []);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    period: '',
    description: '',
    align: 'left'
  });

  const handleAddExperience = () => {
    setModalMode('add');
    setFormData({
      title: '',
      company: '',
      period: '',
      description: '',
      align: 'left'
    });
    setShowModal(true);
  };

  const handleEditExperience = (experience, index) => {
    setModalMode('edit');
    setSelectedExperience(index);
    setFormData({
      title: experience.title,
      company: experience.company,
      period: experience.period,
      description: experience.description,
      align: experience.align || 'left'
    });
    setShowModal(true);
  };

  const handleDeleteExperience = (index) => {
    if (window.confirm('Are you sure you want to delete this experience?')) {
      const updatedExperiences = experiences.filter((_, i) => i !== index);
      setExperiences(updatedExperiences);
      MyInfo[0].Myexperiences = updatedExperiences;
      onSave();
    }
  };

  const handleSaveExperience = () => {
    if (modalMode === 'add') {
      const newExperience = {
        ...formData,
        id: Date.now()
      };
      const updatedExperiences = [...experiences, newExperience];
      setExperiences(updatedExperiences);
      MyInfo[0].Myexperiences = updatedExperiences;
    } else {
      const updatedExperiences = experiences.map((exp, index) => 
        index === selectedExperience ? { ...exp, ...formData } : exp
      );
      setExperiences(updatedExperiences);
      MyInfo[0].Myexperiences = updatedExperiences;
    }
    setShowModal(false);
    onSave();
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">My Resume</h2>
          <p className="text-sm text-gray-500 mt-1">Manage your work experience and education</p>
        </div>
        <button
          onClick={handleAddExperience}
          className="inline-flex items-center gap-2 px-3 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Experience
        </button>
      </div>

      <div className="p-6">
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{experience.title}</h3>
                  <p className="text-md text-gray-700">{experience.company}</p>
                  <p className="text-sm text-gray-500 mb-2">{experience.period}</p>
                  <p className="text-gray-600">{experience.description}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditExperience(experience, index)}
                    className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteExperience(index)}
                    className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded hover:bg-red-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">
              {modalMode === 'add' ? 'Add New Experience' : 'Edit Experience'}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="e.g., Senior Developer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company/Institution</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="e.g., Tech Corp"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Period</label>
                <input
                  type="text"
                  value={formData.period}
                  onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="e.g., Jan 2022 - Present"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  rows="3"
                  placeholder="Describe your role and achievements..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Alignment</label>
                <select
                  value={formData.align}
                  onChange={(e) => setFormData({ ...formData, align: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="left">Left</option>
                  <option value="right">Right</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSaveExperience}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Save
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Update the AdminDashboard to include Resume tab
const UserInformation = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [currentEditingSection, setCurrentEditingSection] = useState(null);

  const switchTab = (tabName) => {
    setActiveTab(tabName);
    if (currentEditingSection) {
      setCurrentEditingSection(null);
    }
  };

  const handleEdit = (section) => {
    setCurrentEditingSection(section);
  };

  const handleSave = () => {
    setCurrentEditingSection(null);
    alert('Changes saved successfully!');
  };

  const handleCancel = () => {
    setCurrentEditingSection(null);
  };

  const tabs = [
    { name: 'personal', label: 'Personal Info' },
    { name: 'about', label: 'About Me' },
    { name: 'skills', label: 'Skills' },
    { name: 'projects', label: 'Projects' },
    { name: 'services', label: 'Services' },
    { name: 'resume', label: 'Resume' }, // New tab
    { name: 'contact', label: 'Contact' },
    { name: 'social', label: 'Social Links' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Tabs Navigation */}
        <div className="flex bg-white rounded-lg border border-gray-200 p-1 mb-6 overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.name}
              onClick={() => switchTab(tab.name)}
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                activeTab === tab.name 
                  ? 'bg-white text-gray-900 shadow-sm border border-gray-200' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'personal' && (
          <PersonalInformation
            isEditing={currentEditingSection === 'personalInfo'}
            onEdit={() => handleEdit('personalInfo')}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        )}

        {activeTab === 'about' && (
          <AboutMe
            isEditing={currentEditingSection === 'aboutMe'}
            onEdit={() => handleEdit('aboutMe')}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        )}

        {activeTab === 'skills' && (
          <SkillsManager
            isEditing={currentEditingSection === 'skills'}
            onEdit={() => handleEdit('skills')}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        )}

        {activeTab === 'projects' && (
          <ProjectsManager
            isEditing={currentEditingSection === 'projects'}
            onEdit={() => handleEdit('projects')}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        )}

        {activeTab === 'services' && (
          <ServicesManager
            isEditing={currentEditingSection === 'services'}
            onEdit={() => handleEdit('services')}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        )}

        {activeTab === 'resume' && (
          <ResumeManager
            isEditing={currentEditingSection === 'resume'}
            onEdit={() => handleEdit('resume')}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        )}

        {activeTab === 'contact' && (
          <ContactManager
            isEditing={currentEditingSection === 'contact'}
            onEdit={() => handleEdit('contact')}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        )}

        {activeTab === 'social' && (
          <SocialLinksManager
            isEditing={currentEditingSection === 'social'}
            onEdit={() => handleEdit('social')}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        )}
      </div>
    </div>
  );
};

export default UserInformation;

