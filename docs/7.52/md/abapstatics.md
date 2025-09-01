  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Objects](javascript:call_link\('abenobjects_statements.htm'\)) → 

STATICS

[Quick Reference](javascript:call_link\('abapstatics_shortref.htm'\))

Syntax

STATICS stat *\[*[options](javascript:call_link\('abapdata.htm'\))*\]*.

Effect

Declares static variables stat. The statement STATICS for declaring static variables can only be used in [static methods](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry"), [function modules](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry"), and [subroutines](javascript:call_link\('abensubroutine_glosry.htm'\) "Glossary Entry").

The [naming conventions](javascript:call_link\('abennaming_conventions.htm'\)) apply to the name stat. The syntax of the additions options is the same as for the statement [DATA](javascript:call_link\('abapdata.htm'\)) for declaring normal variables. The only additions that are not possible are [READ-ONLY](javascript:call_link\('abapdata_options.htm'\)) and [BOXED](javascript:call_link\('abapdata_boxed.htm'\)) and it is also not possible to declare [LOB handle structures](javascript:call_link\('abapdata_lob_handle.htm'\)).

As with normal local variables, variables declared using STATICS are only visible within the [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry"). The life span of a variable declared using STATICS is the same as that of a global data object. The variable is created once when the [master program](javascript:call_link\('abenframe_program_glosry.htm'\) "Glossary Entry") is loaded to the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), and its content is assigned the [start value](javascript:call_link\('abenstart_value_glosry.htm'\) "Glossary Entry") of the VALUE addition. Calling and ending the procedure have no effect on the life span and content.

Note

In instance methods, the statement STATICS is not allowed. Instead, [static attributes](javascript:call_link\('abenstatic_attribute_glosry.htm'\) "Glossary Entry") of the class declared using [CLASS-DATA](javascript:call_link\('abapclass-data.htm'\)) can be used.

Example

The method meth returns the same result for the variable local for each call, since this subroutine is instantiated again in every call. The static variable static already exists, on the other hand, and its value is raised by 1 in each call.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS meth.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD meth.
    DATA    local  TYPE i VALUE 10.
    STATICS static TYPE i VALUE 10.
    local  = local  + 1.
    static = static + 1.
    cl\_demo\_output=>write( |Local: { local }, | &&
                           |Static: { static }| ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  DO 10 TIMES.
    cls=>meth( ).
  ENDDO.
  cl\_demo\_output=>display( ).