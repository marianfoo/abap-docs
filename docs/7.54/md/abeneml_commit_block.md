  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP RESTful Programming Model](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [Entity Manipulation Language](javascript:call_link\('abeneml.htm'\)) →  [ABAP EML - COMMIT ENTITIES](javascript:call_link\('abeneml_commit_entities.htm'\)) → 

ABAP EML - COMMIT ENTITIES BLOCK

Syntax

COMMIT ENTITIES BEGIN
  *\[*RESPONSES *\[*OF root\_names*\]**\]*
  *\[*FAILED   it\_failed *|* DATA(it\_failed)*\]*
  *\[*REPORTED it\_reported *|*DATA(it\_reported)*\]*.
  ...
COMMIT ENTITIES END.

Effect

In the context of the statement [COMMIT ENTITIES](javascript:call_link\('abeneml_commit_entities.htm'\)), the runtime of the [ABAP RESTful programming model](javascript:call_link\('abenrestful_abap_programming.htm'\)) holds its key registry to respond to queries from the statement [CONVERT KEY](javascript:call_link\('abenconvert_key.htm'\)). In the statement COMMIT ENTITIES END, this information is then deleted.