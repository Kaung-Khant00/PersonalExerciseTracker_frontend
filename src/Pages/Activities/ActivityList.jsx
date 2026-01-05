import { toast } from "react-toastify";
import API from "../../Api/api";
import API_ROUTES from "../../Api/ROUTE";
import ActivityCard from "../../components/Activity/ActivityCard";
import useStore from "../../zustand/zustand";
import { useNavigate } from "react-router-dom";

const ActivityList = ({ getActivitiesAPI }) => {
  const { activities } = useStore();
  const { setEditingActivity } = useStore();
  const navigate = useNavigate();

  const onEdit = (activity) => {
    setEditingActivity(activity);
    navigate(`/activities/edit`);
  };
  const onDelete = async (activityId) => {
    try {
      const response = await API.delete(
        API_ROUTES.ACTIVITIES.DELETE(activityId)
      );
      console.log(response);
      if (response.status === 200) {
        toast.success(response.data?.message);
        getActivitiesAPI();
      }
    } catch (err) {
      console.error(err);
    }
  };
  if (!activities.data?.length) {
    return (
      <div className="text-center opacity-60 mt-10">
        No cycling activity yet 🚴
      </div>
    );
  }

  return (
    <div className="">
      {activities.data.map((activity) => (
        <ActivityCard
          key={activity._id}
          activity={activity}
          onEdit={() => {
            onEdit(activity);
          }}
          onDelete={() => {
            onDelete(activity._id);
          }}
        />
      ))}
    </div>
  );
};

export default ActivityList;
