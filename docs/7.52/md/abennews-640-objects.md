  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [Changes in Release 6.40](javascript:call_link\('abennews-640.htm'\)) → 

ABAP Objects in Release 6.40

[1\. Data types and constants in the public visibility section](#!ABAP_MODIFICATION_1@1@)
[
2\. Access to static components for object types of global classes](#!ABAP_MODIFICATION_2@2@)
[
3\. Use of alias names](#!ABAP_MODIFICATION_3@3@)
[
4\. Unused private components](#!ABAP_MODIFICATION_4@4@)

Modification 1

\- Data types and constants in visibility section of global classes

As of Release 6.40, data types and constants can be created in the public [visibility section](javascript:call_link\('abenvisibility_section_glosry.htm'\) "Glossary Entry") of global classes and interfaces, which was not previously possible. Classes and interfaces therefore make the use of [type groups](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry") superfluous, whereas for types and constants, names that are longer than the names in the type groups are possible.

Modification 2

\- Access to static components of object types

The statements [CLASS cl DEFINITION LOAD](javascript:call_link\('abapclass_deferred.htm'\)) and [INTERFACE in LOAD](javascript:call_link\('abapinterface_deferred.htm'\)) are now only necessary if a source text contains recursive accesses to global classes or interfaces. Until now, you always had to specify these statements if you were accessing the [static components](javascript:call_link\('abenstatic_component_glosry.htm'\) "Glossary Entry") of global classes or interfaces for the first time. To recognize recursive class and interface definitions, you can use transaction SYNT, which has been enhanced with a trace for these object types.

Note

\- This change was also retransported after Release 6.20.

Modification 3

\- Use of alias names

As of Release 6.40, during the implementation of methods using statement METHOD and during the [redefinition](javascript:call_link\('abenredefinition_glosry.htm'\) "Glossary Entry") of methods with statement METHODS ...REDEFINITION and [ALIASES](javascript:call_link\('abapaliases.htm'\)), you can specify the defined alias names of the methods. At the same time, however, as of Release 6.40, you will receive a warning about the syntax check if you access identical components within a class declaration or a method with different descriptions.

Modification 4

\- Unused private components

As of Release 6.40, all unused private components of a class lead to a warning during the enhanced program check. Private methods must be called, private events must be both triggered and processed.