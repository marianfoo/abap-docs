  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756.htm) → 

Object Component Selector in Release 7.56

Modification

Dynamic Target

With the syntax

... *{* dref->(comp\_name) *}*
  *|* *{* cref->(attr\_name) *}*
  *|* *{* iref->(attr\_name) *}* ...

the [object component selector \->](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobject_component_selector.htm) can be used to access components and attributes dynamically now . Before, this was possible for [dynamic components](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign_dynamic_components.htm) and [dynamic access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign_mem_area_dynamic_access.htm) in the statement ASSIGN only.