  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_glossary.htm) → 

authorization group

[Program attribute](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_attribute_glosry.htm "Glossary Entry") that allows the combination of different programs into groups for shared [authorization checks](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenauthorization_check_glosry.htm "Glossary Entry"). The group name is an [authorization field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenauthorization_field_glosry.htm "Glossary Entry") of the [authorization object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenauthorization_object_glosry.htm "Glossary Entry") S\_PROGRAM, for which an [authorization check](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenauthorization_check_glosry.htm "Glossary Entry") is performed when an [executable program](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexecutable_program_glosry.htm "Glossary Entry") is executed using the statement [SUBMIT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsubmit.htm), to check if the current [user](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuser_glosry.htm "Glossary Entry") is authorized to execute the program. All authorization groups should be stored in the database table TPGP.