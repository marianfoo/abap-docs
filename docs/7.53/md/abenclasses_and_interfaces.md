  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) → 

Classes and Interfaces

This section describes the definition of [classes](javascript:call_link\('abapclass.htm'\)) and [interfaces](javascript:call_link\('abapinterface.htm'\)) and of their [components](javascript:call_link\('abenclass_ifac_components.htm'\)). Classes and interfaces form the basis for [ABAP Objects](javascript:call_link\('abenabap_objects_oview.htm'\)), the object-oriented part of the ABAP language. Classes and interfaces can be defined in ABAP programs of the following [program types](javascript:call_link\('abenprogram_type_glosry.htm'\) "Glossary Entry"):

-   In a [class pool](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") it is possible to define precisely one global class in the class library that can be used in all other ABAP programs. In the global declaration part of a class pool, it is possible to define local data types, classes, and interfaces to be used in the class pool.

-   In an [interface pool](javascript:call_link\('abeninterface_pool_glosry.htm'\) "Glossary Entry"), precisely one global interface from the class library can be defined for use in all other ABAP programs. In the global declaration section of an interface pool, you are not allowed to define local data types, classes and interfaces. You can declare type groups. In interface pools, no other statements are allowed outside of the global interfaces.

-   In all other ABAP programs, except type groups, local classes and interfaces to be used in the program itself can be defined.

Continue
[ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\))
[CLASS](javascript:call_link\('abapclass.htm'\))
[INTERFACE](javascript:call_link\('abapinterface.htm'\))
[Components in Classes and Interfaces](javascript:call_link\('abenclass_ifac_components.htm'\))