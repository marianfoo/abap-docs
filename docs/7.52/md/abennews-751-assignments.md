  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-75.htm) →  [Changes in Release 7.51](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-751.htm) → 

Assignments in Release 7.51

[1\. System class for dynamic mapping](#!ABAP_MODIFICATION_1@1@)

Modification 1

System Class for Dynamic Mapping

The new methods [CREATE\_USING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_corresponding_2.htm) and [EXECUTE\_USING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_corresponding_2.htm) for making assignments between internal tables by component while using lookup tables have been added to the system class [CL\_ABAP\_CORRESPONDING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_corresponding.htm).

If the method [EXECUTE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_corresponding_1.htm) for simple assignment is used, the restriction that source and target cannot be identical has been lifted. It should be noted, however, that no temporary copy of the source is created as a target object (like in [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove-corresponding.htm)), which means that the result in the case of overlapping source and target components is different than when the operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencorresponding_constr_arg_type.htm) is used reflexively.