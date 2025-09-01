  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Objects](javascript:call_link\('abenobjects_statements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20STATICS%2C%20ABAPSTATICS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

STATICS

[Short Reference](javascript:call_link\('abapstatics_shortref.htm'\))

Syntax

STATICS stat *\[*[options](javascript:call_link\('abapdata.htm'\))*\]*.

Effect

Declares static variables stat. The statement STATICS for declaring static variables can only be used in [static methods](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry"), [function modules](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry"), and [subroutines](javascript:call_link\('abensubroutine_glosry.htm'\) "Glossary Entry").

The [naming conventions](javascript:call_link\('abennaming_conventions.htm'\)) apply to the name stat. The syntax of the additions options is the same as for the statement [DATA](javascript:call_link\('abapdata.htm'\)) for declaring regular variables. Only the additions [READ-ONLY](javascript:call_link\('abapdata_options.htm'\)) and [BOXED](javascript:call_link\('abapdata_boxed.htm'\)), and the declaration of [LOB handle structures](javascript:call_link\('abapdata_lob_handle.htm'\)) are not possible.

As with regular local variables, variables declared using STATICS are only visible within their [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry"). However, the lifetime of a variable declared using STATICS corresponds to that of a global data object. The variable is created once when the [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry") is loaded into the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), and its content is assigned the [start value](javascript:call_link\('abenstart_value_glosry.htm'\) "Glossary Entry") of the VALUE addition. Calling and ending the procedure have no effect on the lifetime and content.

Hint

In instance methods, the statement STATICS is not allowed. Instead, [static attributes](javascript:call_link\('abenstatic_attribute_glosry.htm'\) "Glossary Entry") of the class declared using [CLASS-DATA](javascript:call_link\('abapclass-data.htm'\)) can be used.

Example

The method meth produces the same result for the variable local for each call, since it is instantiated again in every call. However, the static variable static already exists and its value is increased by 1 for each call.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS meth.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD meth.
    DATA    local  TYPE i VALUE 10.
    STATICS static TYPE i VALUE 10.
    local  += 1.
    static += 1.
    cl\_demo\_output=>write( |Local: { local }, | &&
                           |Static: { static }| ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  DO 10 TIMES.
    cls=>meth( ).
  ENDDO.
  cl\_demo\_output=>display( ).