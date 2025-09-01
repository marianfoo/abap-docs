  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.51](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-751.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Assignments in Release 7.51, ABENNEWS-751-ASSIGNMENTS, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

Assignments in Release 7.51

Modification

System Class for Dynamic Mapping

The new methods [CREATE\_USING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_corresponding_2.htm) and [EXECUTE\_USING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_corresponding_2.htm) for making assignments between internal tables by component while using lookup tables have been added to the system class [CL\_ABAP\_CORRESPONDING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_corresponding.htm).

If the method [EXECUTE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_corresponding_1.htm) for simple assignment is used, the restriction that source and target cannot be identical has been lifted. It should be noted, however, that no temporary copy of the source is created as a target object (like in [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmove-corresponding.htm)), which means that the result in the case of overlapping source and target components is different than when the operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding_constr_arg_type.htm) is used reflexively.