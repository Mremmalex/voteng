import React  from "react";
import { MdModeEdit,MdHowToVote } from "react-icons/md";
import { FiLogOut } from "react-icons/fi"
import MenuItem from "../shared/MenuItem";

function UserSidebar() {
	return (
		<aside className="border-r-[1px] pt-2 border-gray-500">
			<div className="sticky flex-1 w-[20em] h-[40em]  ">
				<ul className="flex flex-col place-items-center py-10">

          <MenuItem 
            Icon={ MdHowToVote}
            title="Federal Election"
            herf="/auth/user/federal_elction"
          />
          <MenuItem Icon={ MdHowToVote} title="State Election" herf="/auth/user/state_elction"/>
					<MenuItem
						Icon={MdModeEdit}
						title="Edit Profile"
						herf="/auth/user/edit_profile"
					/>
          <MenuItem Icon={FiLogOut} title="LogOut" herf="/auth/user/log_out"/>
				</ul>
			</div>
		</aside>
	);
}

export default UserSidebar;