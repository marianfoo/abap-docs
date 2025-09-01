  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-75.htm) →  [News for ABAP Release 7.53](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-753.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Dynpros%20in%20ABAP%20Release%207.53%2C%20ABENNEWS-753-DYNPROS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Dynpros in ABAP Release 7.53

Modification

Reference Value for Conversion Exits

An optional input parameter with the predefined name REFVAL can be created for the function modules for [conversion exits](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_exits.htm). When a dynpro field of the type [CURR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) or [QUAN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) is converted, this parameter is given the value of a an associated reference field of the type [CUKY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) or [UNIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) automatically If [WRITE USING EDIT MASK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_options.htm) is used, the input parameter REFVAL is not filled.