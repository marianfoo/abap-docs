  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [News for Release 7.0, EhP2](javascript:call_link\('abennews-71.htm'\)) → 

ABAP Objects in Release 7.0, EhP2

[1\. Declaring Instance Constructors](#!ABAP_MODIFICATION_1@1@)
[2\. C Destructor](#!ABAP_MODIFICATION_2@2@)
[3\. Constants in Class Pools](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Declaring Instance Constructors

From Release 7.0, EhP2, the statement [METHODS](javascript:call_link\('abapmethods_constructor.htm'\)) can be used to declare an [instance constructor](javascript:call_link\('abeninstance_constructor_glosry.htm'\) "Glossary Entry") in all [visibility sections](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry"), whose instantiability is more general than or equal to that specified in the addition [CREATE](javascript:call_link\('abapclass_options.htm'\)) of the statement [CLASS DEFINITION](javascript:call_link\('abapclass_definition.htm'\)). Until now, this was only possible with the public visibility section (this modification was also transported to Release 7.0).

Modification 2   

C Destructor

From Release 7.0, EhP2, more than one attribute can be passed in the [C destructor](javascript:call_link\('abenc_destructor.htm'\)) when SYSTEM-CALL is used.

Modification 3   

Constants in Class Pools

From Release 7.0, EhP2, local program constants can be declared in a class pool. The private components and methods of the global class can access these constants.