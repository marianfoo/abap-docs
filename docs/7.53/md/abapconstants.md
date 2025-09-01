  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Objects](javascript:call_link\('abenobjects_statements.htm'\)) → 

CONSTANTS

[Quick Reference](javascript:call_link\('abapconstants_shortref.htm'\))

Syntax

CONSTANTS const *\[*[options](javascript:call_link\('abapdata.htm'\))*\]*.

Effect

This statement declares a constant data object, const for short. The content of a constant cannot be changed at runtime of an ABAP program. It can only be used as an operand in [reader positions](javascript:call_link\('abenreading_position_glosry.htm'\) "Glossary Entry") of ABAP statements. Constants declared in the declaration part of a class or an interface are [static attributes](javascript:call_link\('abenstatic_attribute_glosry.htm'\) "Glossary Entry") of that class or interface.

The [naming conventions](javascript:call_link\('abennaming_conventions.htm'\)) apply to the name const. The syntax of the additions options of the statement CONSTANTS for declaring constants matches the statement [DATA](javascript:call_link\('abapdata.htm'\)) for declaring variables. Only the additions [READ-ONLY](javascript:call_link\('abapdata_options.htm'\)) and [BOXED](javascript:call_link\('abapdata_boxed.htm'\))
plus declarations of [LOB handle structures](javascript:call_link\('abapdata_lob_handle.htm'\)) are not possible. The statement INCLUDE cannot be used within the declaration of a structure.

Unlike the statement DATA, an [initial value](javascript:call_link\('abenstart_value_glosry.htm'\) "Glossary Entry") with the addition [VALUE](javascript:call_link\('abapdata_options.htm'\)) must be specified when using the statement CONSTANTS. The same restrictions as for DATA apply. This has the following implications for the declaration of constants with [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data types:

-   A start value val can be specified for the ABAP types string and xstring only.
    
-   Constant internal tables, reference variables, and structures with components that are not just character-like and flat can be assigned their [initial value](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry") by IS INITIAL only, and are therefore always initial.
    

Notes

-   If the class component selector is used, the interface name can also be used to access static attributes of interfaces declared using CONSTANTS.
    
-   Constants are stored in the [PXA](javascript:call_link\('abenpxa_glosry.htm'\) "Glossary Entry") and are available to all programs.
    

Example

The statements below declare a numeric constant, a constant structure, and a constant reference. The reference can be used in comparisons, for example, or passed to [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry").

CONSTANTS pi TYPE p LENGTH 8 DECIMALS 14
             VALUE '3.14159265358979'.
CONSTANTS: BEGIN OF sap\_ag,
             zip\_code TYPE n LENGTH 5 VALUE '69189',
             city     TYPE string VALUE \`Walldorf\`,
             country  TYPE string VALUE \`Germany\`,
           END OF sap\_ag.
CONSTANTS null\_pointer TYPE REF TO object VALUE IS INITIAL.