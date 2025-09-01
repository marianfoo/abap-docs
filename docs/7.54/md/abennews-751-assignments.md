  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.51](javascript:call_link\('abennews-751.htm'\)) → 

Assignments in Release 7.51

[1\. System class for dynamic mapping](#!ABAP_MODIFICATION_1@1@)

Modification 1

System Class for Dynamic Mapping

The new methods [CREATE\_USING](javascript:call_link\('abencl_abap_corresponding_2.htm'\)) and [EXECUTE\_USING](javascript:call_link\('abencl_abap_corresponding_2.htm'\)) for making assignments between internal tables by component while using lookup tables have been added to the system class [CL\_ABAP\_CORRESPONDING](javascript:call_link\('abencl_abap_corresponding.htm'\)).

If the method [EXECUTE](javascript:call_link\('abencl_abap_corresponding_1.htm'\)) for simple assignment is used, the restriction that source and target cannot be identical has been lifted. It should be noted, however, that no temporary copy of the source is created as a target object (like in [MOVE-CORRESPONDING](javascript:call_link\('abapmove-corresponding.htm'\))), which means that the result in the case of overlapping source and target components is different than when the operator [CORRESPONDING](javascript:call_link\('abencorresponding_constr_arg_type.htm'\)) is used reflexively.