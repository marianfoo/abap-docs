  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) → 

Classes and Interfaces (ABAP Objects)

This section describes the definition of [classes](javascript:call_link\('abapclass.htm'\)) and [interfaces](javascript:call_link\('abapinterface.htm'\)) and of their [components](javascript:call_link\('abenclass_ifac_components.htm'\)). Classes and interfaces are the basis of [ABAP Objects](javascript:call_link\('abenabap_objects_oview.htm'\)), the object-oriented part of the ABAP language. Classes and interfaces can be defined in ABAP programs of the following [program types](javascript:call_link\('abenprogram_type_glosry.htm'\) "Glossary Entry"):

-   In a [class pool](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry"), exactly one global class of the class library can be defined that can be used in all other ABAP programs. In the global declaration part of a class pool, it is possible to define local data types, classes, and interfaces for use in the class pool itself.

-   In an [interface pool](javascript:call_link\('abeninterface_pool_glosry.htm'\) "Glossary Entry"), exactly one global interface of the class library can be defined for use in all other ABAP programs. In the global declaration section of an interface pool, it is forbidden to define local data types, classes and interfaces. Type pools can be declared. In interface pools, no other statements are allowed outside of the global interfaces.

-   In all other ABAP programs except type pools, local classes and interfaces can be defined for use in the program.

Continue
[ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\))
[CLASS](javascript:call_link\('abapclass.htm'\))
[INTERFACE](javascript:call_link\('abapinterface.htm'\))
[ABAP Objects - Components in Classes and Interfaces](javascript:call_link\('abenclass_ifac_components.htm'\))