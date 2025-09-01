  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces (ABAP Objects)](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [ABAP Objects - Overview](javascript:call_link\('abenabap_objects_oview.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Objects - Classes, ABENCLASSES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASug
gestion for improvement:)

ABAP Objects - Classes

The type of an [object](javascript:call_link\('abenobject_glosry.htm'\) "Glossary Entry") is referred to as its class. A class is an abstract representation of an object or, visually speaking, a set of building instructions for objects. To describe the properties of objects, classes contain [components](javascript:call_link\('abenclass_components.htm'\)) that define the status and behavior of objects.

Global Classes and Local Classes   

Classes can be [defined](javascript:call_link\('abenclass_interface_definition.htm'\)) globally in the class library of the [repository](javascript:call_link\('abenrepository_glosry.htm'\) "Glossary Entry") or locally in an ABAP program.

[Global classes](javascript:call_link\('abenglobal_class_glosry.htm'\) "Glossary Entry") are coded in a special ABAP program, a [class pool](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry"), whereas [local classes](javascript:call_link\('abenlocal_class_glosry.htm'\) "Glossary Entry") can be coded in almost every ABAP program. Global classes are visible in all ABAP programs. The usability depends on the package check. Local classes can be used statically only in their own program. Dynamic access is also possible beyond program boundaries, but it is not recommended. When a global class is first used, the class pool is loaded to the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") of the user. The local classes of a class pool can be used by its global class.

Except for the storage type and the visibility, there are hardly any conceptual differences between global and local classes. Those few differences include the fact that, in the public interface of a global class, only references to public types are possible and that a distinction is made between global and local [friends](javascript:call_link\('abenfriend_glosry.htm'\) "Glossary Entry").

In addition, it also does not make any difference whether a method of a local class or a global class is called. For this reason, classes used by multiple programs should be created exclusively in the class library. The reuse of local classes by using [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") should be avoided.

Executable Example

[Classes](javascript:call_link\('abenclass_abexa.htm'\))

Continue
[ABAP Objects - Components of Classes](javascript:call_link\('abenclass_components.htm'\))