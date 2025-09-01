  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Entity Manipulation Language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml.htm) →  [ABAP EML - COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml_commit_entities.htm) → 

ABAP EML - COMMIT ENTITIES RESPONSES

Syntax

COMMIT ENTITIES
  RESPONSES *\[*OF root\_names*\]*
    *\[*FAILED   it\_failed *|* DATA(it\_failed)*\]*
    *\[*REPORTED it\_reported *|* DATA(it\_reported)*\]*.

Effect

The statement COMMIT ENTITIES RESPONSES is a dynamic form of the COMMIT statement. The table root\_names can be used to restrict which business objects are given the response information in FAILED and REPORTED. If not used, all information accumulated in the save phase is passed.

More information about COMMIT ENTITIES can be found under [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeneml_commit_entities.htm).