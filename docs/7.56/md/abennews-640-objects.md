  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [News for Release 6.40](javascript:call_link\('abennews-640.htm'\)) → 

ABAP Objects in Release 6.40

[1\. Data Types and Constants in the Visibility Section of Global Classes](#!ABAP_MODIFICATION_1@1@)
[2\. Access to Static Components of Object Types](#!ABAP_MODIFICATION_2@2@)
[3\. Use of Alias Names](#!ABAP_MODIFICATION_3@3@)
[4\. Unused Private Components](#!ABAP_MODIFICATION_4@4@)

Modification 1   

Data Types and Constants in the Visibility Section of Global Classes

From Release 6.40, data types and constants can be created in the public [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") of global classes and interfaces, which was not previously possible. Classes and interfaces therefore make the use of [type pools](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry") superfluous, whereas for types and constants names that are longer than the names in the type pools are possible.

Modification 2   

Access to Static Components of Object Types

The statements [CLASS cl DEFINITION LOAD](javascript:call_link\('abapclass_deferred.htm'\)) and [INTERFACE in LOAD](javascript:call_link\('abapinterface_deferred.htm'\)) are now only necessary if source code contains recursive accesses to global classes or interfaces. Until now, these statements always had to be specified if [static components](javascript:call_link\('abenstatic_component_glosry.htm'\) "Glossary Entry") of global classes or interfaces were being accessed for the first time. Transaction SYNT, to which a trace for these object types has been added, can be used to detect recursive class and interface definitions.

Hint

This change was also transported back to Release 6.20.

Modification 3   

Use of Alias Names

From Release 6.40, it is possible to specify the alias names of the methods defined using [ALIASES](javascript:call_link\('abapaliases.htm'\)) in the implementation of methods using the statement METHOD and in the [redefinition](javascript:call_link\('abenredefinition_glosry.htm'\) "Glossary Entry") of methods using the statement METHODS ...REDEFINITION. At the same time, however, from Release 6.40 there will be a warning about the syntax check if identical components are accessed within a class declaration or a method with different names.

Modification 4   

Unused Private Components

From Release 6.40, all unused private components of a class produce a warning in the extended program check. Private methods must be called and private events must be both raised and handled.