  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for ABAP Release 7.56](javascript:call_link\('abennews-756.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Object%20Component%20Selector%20in%20ABAP%20Release%207.56%2C%20ABENNEWS-756-OBJ_COMP_SELECTOR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%2
0for%20improvement:)

Object Component Selector in ABAP Release 7.56

Modification

Dynamic Target

The following syntax can be used for the [object component selector \->](javascript:call_link\('abenobject_component_selector.htm'\)) to access components and attributes dynamically now:

... *{* dref->(comp\_name) *}*
  *|* *{* cref->(attr\_name) *}*
  *|* *{* iref->(attr\_name) *}* ...

Before, this was possible for [dynamic components](javascript:call_link\('abapassign_dynamic_components.htm'\)) and [dynamic access](javascript:call_link\('abapassign_mem_area_dynamic_access.htm'\)) in the statement ASSIGN only.