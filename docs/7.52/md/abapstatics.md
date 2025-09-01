  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_and_objects.htm) →  [Declaring Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobjects_statements.htm) → 

STATICS

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapstatics_shortref.htm)

Syntax

STATICS stat *\[*[options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata.htm)*\]*.

Effect

Declares static variables stat. The statement STATICS for declaring static variables can only be used in [static methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_method_glosry.htm "Glossary Entry"), [function modules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_module_glosry.htm "Glossary Entry"), and [subroutines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubroutine_glosry.htm "Glossary Entry").

The [naming conventions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennaming_conventions.htm) apply to the name stat. The syntax of the additions options is the same as for the statement [DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata.htm) for declaring normal variables. The only additions that are not possible are [READ-ONLY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_options.htm) and [BOXED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_boxed.htm) and it is also not possible to declare [LOB handle structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_lob_handle.htm).

As with normal local variables, variables declared using STATICS are only visible within the [procedure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocedure_glosry.htm "Glossary Entry"). The life span of a variable declared using STATICS is the same as that of a global data object. The variable is created once when the [master program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenframe_program_glosry.htm "Glossary Entry") is loaded to the [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry"), and its content is assigned the [start value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstart_value_glosry.htm "Glossary Entry") of the VALUE addition. Calling and ending the procedure have no effect on the life span and content.

Note

In instance methods, the statement STATICS is not allowed. Instead, [static attributes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_attribute_glosry.htm "Glossary Entry") of the class declared using [CLASS-DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-data.htm) can be used.

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