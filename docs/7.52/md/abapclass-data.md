  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) →  [Components in Classes and Interfaces](javascript:call_link\('abenclass_ifac_components.htm'\)) →  [Data Types and Attributes](javascript:call_link\('abentypes_attributes.htm'\)) → 

CLASS-DATA

[Quick Reference](javascript:call_link\('abapclass-data_shortref.htm'\))

Syntax

CLASS-DATA attr *\[*[options](javascript:call_link\('abapdata.htm'\))*\]*.

Effect

The statement CLASS-DATA can only be used in the declaration part of a class or an interface. The statement declares a static attribute attr whose validity is not associated with instances of a class but with the class itself. All instances of the class and its subclasses access the same static attribute.

The [naming conventions](javascript:call_link\('abennaming_conventions.htm'\)) apply to the name attr. The syntax of the additions options is identical to the statement [DATA](javascript:call_link\('abapdata.htm'\)) for instance attributes (only the addition [WITH HEADER LINE](javascript:call_link\('abapdata_itab.htm'\)) must not be used).

Notes

-   Like all [static components in the inheritance](javascript:call_link\('abeninheritance_statical.htm'\)), the static attributes of a superclass exist in all subclasses. A static attribute that is visible externally can be addressed using the class component selector along with all the names of the classes in which it exists. This means that the class in which it is declared is always addressed, which, for example, has an impact on how the [static constructor](javascript:call_link\('abenstatic_constructor_glosry.htm'\) "Glossary Entry") is executed. A change made to the static attribute applies to all classes in which it exists, independently of the addressing.
    
-   Static attributes declared using CLASS-DATA can be accessed by using the class component selector only with class names, and not with interface names.
    
-   The static attributes of a [shared memory-enabled class](javascript:call_link\('abendata_class_glosry.htm'\) "Glossary Entry") are handled in the same way as a normal class, which means they are created in the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") of a program when the class is loaded there. If a number of programs access the same [shared objects](javascript:call_link\('abenshared_objects_glosry.htm'\) "Glossary Entry"), the static attributes of the corresponding classes exist more than once and independently of one another in the programs.
    
-   Structured static attributes can be declared as a [static box](javascript:call_link\('abenstatic_box_glosry.htm'\) "Glossary Entry") using the addition [BOXED](javascript:call_link\('abapdata_boxed.htm'\)).
    

Example

In this example, the static attribute text of class c1 is accessed using the class component selector without having created an instance of the class.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA text TYPE string VALUE \`Static data\`.
ENDCLASS.
START-OF-SELECTION.
  cl\_demo\_output=>display\_text( c1=>text ).