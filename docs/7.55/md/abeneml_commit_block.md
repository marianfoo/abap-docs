  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [ABAP Entity Manipulation Language](javascript:call_link\('abeneml.htm'\)) →  [ABAP EML - COMMIT ENTITIES](javascript:call_link\('abeneml_commit_entities.htm'\)) → 

ABAP EML - COMMIT ENTITIES BLOCK

\* Work in progress \*

Syntax

COMMIT ENTITIES BEGIN
  *\[*RESPONSES *\[*OF root\_names*\]**\]*
  *\[*FAILED   it\_failed *|* DATA(it\_failed)*\]*
  *\[*REPORTED it\_reported *|*DATA(it\_reported)*\]*.
  ...
COMMIT ENTITIES END.

Effect

In the context of the statement [COMMIT ENTITIES](javascript:call_link\('abeneml_commit_entities.htm'\)), the runtime of [ABAP RAP](javascript:call_link\('abenabap_rap_glosry.htm'\) "Glossary Entry") holds its key registry to respond to queries from the statement [CONVERT KEY](javascript:call_link\('abenconvert_key.htm'\)). In the statement COMMIT ENTITIES END, this information is then deleted.