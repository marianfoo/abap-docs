  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Types and Objects, Overview](javascript:call_link\('abentypes_objects_oview.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) →  [References](javascript:call_link\('abendata_references.htm'\)) → 

Object References

Object references can point to instances of [classes](javascript:call_link\('abenclass_glosry.htm'\) "Glossary Entry"). The static type of their reference variables is either a class or an interface. Both types can be used to create objects with the statement [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)).

-   Class reference variables allow access to all visible components of a class.
-   Interface reference variables restrict the view of the [interface components](javascript:call_link\('abeninterface_component_glosry.htm'\) "Glossary Entry") of a class.

If an attempt is made to access an instance attribute using an object reference variable that contains the [null reference](javascript:call_link\('abennull_reference_glosry.htm'\) "Glossary Entry"), an uncatchable exception is raised. A catchable exception is raised when an instance method is called.

Object references are always [heap references](javascript:call_link\('abenheap_reference_glosry.htm'\) "Glossary Entry").

Hint

For more information, see [Object References](javascript:call_link\('abenreferences.htm'\)).

Example

Inline declaration of an object reference variable out with the static type IF\_DEMO\_OUTPUT on the left side of an object of the class CL\_DEMO\_OUTPUT created using its factory method NEW. Calling of the method DISPLAY using the object component selector.

DATA(out) = cl\_demo\_output=>new( ).
out->display( \`Hello\` ).