  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-75.htm) →  [Changes in Release 7.53](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-753.htm) → 

Dynpros in Release 7.53

[1\. Reference value for conversion routines](#!ABAP_MODIFICATION_1@1@)

Modification 1

Reference Value for Conversion Routines

An optional input parameter with the predefined name REFVAL can be created for the function modules for [conversion routines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_exits.htm). When a dynpro field of the type [CURR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) or [QUAN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) is converted, this parameter is given the value of a an associated reference field of the type [CUKY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) or [UNIT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) automatically If [WRITE USING EDIT MASK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to_options.htm) is used, the input parameter REFVAL is not filled.