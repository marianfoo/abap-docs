  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [ABAP Entity Manipulation Language](javascript:call_link\('abeneml.htm'\)) → 

ABAP EML - ROLLBACK ENTITIES

\* Work in progress \*

Syntax

ROLLBACK ENTITIES.

Effect

The statement ROLLBACK ENTITIES rolls back all changes since the last COMMIT and resets the transactional buffer..

Using the statement ROLLBACK ENTITIES is prohibited in the [behavior implementation methods](javascript:call_link\('abenabap_behavior_pools.htm'\)). If violated, a runtime error occurs.