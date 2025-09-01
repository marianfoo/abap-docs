  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for ABAP Release 7.51](javascript:call_link\('abennews-751.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Assignments%20in%20ABAP%20Release%207.51%2C%20ABENNEWS-751-ASSIGNMENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Assignments in ABAP Release 7.51

Modification

System Class for Dynamic Mapping

The new methods [CREATE\_USING](javascript:call_link\('abencl_abap_corresponding_2.htm'\)) and [EXECUTE\_USING](javascript:call_link\('abencl_abap_corresponding_2.htm'\)) for making assignments between internal tables by component while using lookup tables have been added to the system class [CL\_ABAP\_CORRESPONDING](javascript:call_link\('abencl_abap_corresponding.htm'\)).

If the method [EXECUTE](javascript:call_link\('abencl_abap_corresponding_1.htm'\)) for simple assignment is used, the restriction that source and target cannot be identical has been lifted. It should be noted, however, that no temporary copy of the source is created as a target object (like in [MOVE-CORRESPONDING](javascript:call_link\('abapmove-corresponding.htm'\))), which means that the result in the case of overlapping source and target components is different than when the operator [CORRESPONDING](javascript:call_link\('abencorresponding_constr_arg_type.htm'\)) is used reflexively.