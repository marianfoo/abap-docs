  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [ABAP Entity Manipulation Language](javascript:call_link\('abeneml.htm'\)) →  [ABAP EML - COMMIT ENTITIES](javascript:call_link\('abeneml_commit_entities.htm'\)) → 

ABAP EML - COMMIT ENTITIES RESPONSES

\* Work in progress \*

Syntax

COMMIT ENTITIES
  RESPONSES *\[*OF root\_names*\]*
    *\[*FAILED   it\_failed *|* DATA(it\_failed)*\]*
    *\[*REPORTED it\_reported *|* DATA(it\_reported)*\]*.

Effect

The statement COMMIT ENTITIES RESPONSES is a dynamic form of the COMMIT statement. The table root\_names can be used to restrict which business objects are given the response information in FAILED and REPORTED. If not used, all information accumulated in the save phase is passed.

More information about COMMIT ENTITIES can be found under [COMMIT ENTITIES](javascript:call_link\('abeneml_commit_entities.htm'\)).