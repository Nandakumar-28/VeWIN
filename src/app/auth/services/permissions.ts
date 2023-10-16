var permission_list = {
    100   :{name: "accounts_menu", type:"menu"},
    101   :{name: "accounts", parent_id: 100, "type":"sub_menu"},
    102   :{name: "account_add" ,parent_id: 101, "type": "action"},
    103   :{name: "account_edit" ,parent_id: 101, "type": "action"},
    104   :{name: "account_delete", parent_id: 101, "type":"action"},
};

export default permission_list;