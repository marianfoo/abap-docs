  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

conflict resolution

Term in [Switch Framework](javascript:call_link\('abenswitch_framework_glosry.htm'\) "Glossary Entry"). A conflict occurs if more than one [enhancement implementation element](javascript:call_link\('abenenhancement_impl_elem_glosry.htm'\) "Glossary Entry") exists for a single [enhancement option](javascript:call_link\('abenenhancement_point_glosry.htm'\) "Glossary Entry") (for which only one enhancement can be carried out) and when more than one of those enhancement implementation elements are switched on at the same time. Currently, a conflict can occur with the statements [ENHANCEMENT-SECTION](javascript:call_link\('abapenhancement-section.htm'\)) and [GET BADI](javascript:call_link\('abapget_badi.htm'\)). To resolve the conflict, the [conflict resolving enhancement implementation](javascript:call_link\('abenconflict_resol_impl_glosry.htm'\) "Glossary Entry") with the highest priority is found among the [enhancement implementations](javascript:call_link\('abenenhancement_impl_glosry.htm'\) "Glossary Entry") and its enhancement implementation element used.