  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

conflict resolving enhancement implementation

An [enhancement implementation](javascript:call_link\('abenenhancement_impl_glosry.htm'\) "Glossary Entry") to which a [conflict switch](javascript:call_link\('abenconflict_switch_glosry.htm'\) "Glossary Entry") is assigned instead of a regular [switch](javascript:call_link\('abenswitch_german_glosry.htm'\) "Glossary Entry"). A conflict resolving enhancement implementation is used for [conflict resolution](javascript:call_link\('abenconflict_resolution_glosry.htm'\) "Glossary Entry"). It has to mirror the collective semantics of all regular enhancement implementations that can potentially be switched on at the same time and which then show conflicts. These enhancement implementations can be defined using the switches assigned to the conflict switch. When resolving conflicts, a conflict resolving enhancement implementation has priority over regular enhancements. If multiple conflict resolving enhancement implementations exist, the one that resolves the most conflicts takes priority.