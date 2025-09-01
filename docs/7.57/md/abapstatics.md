  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentypes_and_objects.htm) →  [Declaring Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobjects_statements.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: STATICS, ABAPSTATICS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for imp
rovement:)

STATICS

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapstatics_shortref.htm)

Syntax

STATICS stat *\[*[options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata.htm)*\]*.

Effect

Declares static variables stat. The statement STATICS for declaring static variables can only be used in [static methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatic_method_glosry.htm "Glossary Entry"), [function modules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunction_module_glosry.htm "Glossary Entry"), and [subroutines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensubroutine_glosry.htm "Glossary Entry").

The [naming conventions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennaming_conventions.htm) apply to the name stat. The syntax of the additions options is the same as for the statement [DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata.htm) for declaring regular variables. Only the additions [READ-ONLY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_options.htm) and [BOXED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_boxed.htm), and the declaration of [LOB handle structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_lob_handle.htm) are not possible.

As with regular local variables, variables declared using STATICS are only visible within their [procedure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocedure_glosry.htm "Glossary Entry"). However, the lifetime of a variable declared using STATICS corresponds to that of a global data object. The variable is created once when the [compilation unit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencompilation_unit_glosry.htm "Glossary Entry") is loaded into the [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry"), and its content is assigned the [start value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstart_value_glosry.htm "Glossary Entry") of the VALUE addition. Calling and ending the procedure have no effect on the lifetime and content.

Hint

In instance methods, the statement STATICS is not allowed. Instead, [static attributes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatic_attribute_glosry.htm "Glossary Entry") of the class declared using [CLASS-DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass-data.htm) can be used.

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