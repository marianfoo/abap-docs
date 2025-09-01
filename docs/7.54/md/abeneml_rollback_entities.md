  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP RESTful Programming Model](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [Entity Manipulation Language](javascript:call_link\('abeneml.htm'\)) → 

ABAP EML - ROLLBACK ENTITIES

Syntax

ROLLBACK ENTITIES.

Effect

The statement ROLLBACK ENTITIES rolls back all changes since the last COMMIT and resets the transactional buffer..

Using the statement ROLLBACK ENTITIES is prohibited in the [behavior implementation methods](javascript:call_link\('abenabap_behavior_implementations.htm'\)). If violated, a runtime error occurs.