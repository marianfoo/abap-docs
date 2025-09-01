  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)) → 

CREATE OBJECT - parameter\_tables

[Quick Reference](javascript:call_link\('abapcreate_object_shortref.htm'\))

Syntax

... *\[*PARAMETER-TABLE ptab*\]*
    *\[*EXCEPTION-TABLE etab*\]*.

Effect

The additions PARAMETER-TABLE and EXCEPTION-TABLE pass actual parameters dynamically to the instance constructor or assign return values to the non-class-based exceptions.

These additions can be used only if the instantiated class is specified dynamically in name. Using the special internal tables ptab and etab, they assign actual parameters to the input parameters of the instance constructor or return values to the non-class-based exceptions.

The syntax and semantics are the same as those that apply to dynamic method calls using the statement [CALL METHOD](javascript:call_link\('abapcall_method_dynamic.htm'\)). The internal tables ptab and etab in particular must be defined with reference to the tables ABAP\_PARMBIND\_TAB and ABAP\_EXCPBIND\_TAB from the [type group](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry") ABAP.

Example

Creates a [Control Framework](javascript:call_link\('abencontrol_framework_glosry.htm'\) "Glossary Entry") (CFW) dialog box dynamically and passes input parameters dynamically to the instance constructor of the global class CL\_GUI\_DIALOGBOX\_CONTAINER. The class is defined explicitly using the addition [TYPE](javascript:call_link\('abapcreate_object_explicit.htm'\)).

DATA: container TYPE REF TO cl\_gui\_container,
      exc\_ref TYPE REF TO cx\_root.
DATA: class TYPE string VALUE \`CL\_GUI\_DIALOGBOX\_CONTAINER\`,
      ptab TYPE abap\_parmbind\_tab.
ptab = VALUE #( ( name  = 'PARENT'
                  kind  = cl\_abap\_objectdescr=>exporting
                  value = REF #( cl\_gui\_container=>desktop ) )
                ( name  = 'WIDTH'
                  kind  = cl\_abap\_objectdescr=>exporting
                  value = REF #( 1000 ) )
                ( name  = 'HEIGHT'
                  kind  = cl\_abap\_objectdescr=>exporting
                  value = REF #( 300 ) ) ).
TRY.
    CREATE OBJECT container TYPE (class)
      PARAMETER-TABLE ptab.
  CATCH cx\_sy\_create\_object\_error INTO exc\_ref.
    MESSAGE exc\_ref->get\_text( ) TYPE 'I'.
ENDTRY.

Example

The following program extract creates an object of a class SOME\_CLASS dynamically whose instance constructor expects a reference variable of the static type ANY\_CLASS. The syntax of the program is correct, but the object is created only in systems in which the classes exist.

CONSTANTS:
  anycls  TYPE string VALUE \`ANY\_CLASS\`,
  somecls TYPE string VALUE \`SOME\_CLASS\`,
  param   TYPE string VALUE \`PARA\`.
DATA dref TYPE REF TO data.
TRY.
    CREATE DATA dref TYPE REF TO (anycls).
    ASSIGN dref->\* TO FIELD-SYMBOL(<fs>).
    CREATE OBJECT <fs> TYPE (anycls).
  CATCH cx\_sy\_create\_data\_error
        cx\_sy\_create\_object\_error.
    ...
ENDTRY.
IF <fs> IS ASSIGNED.
  DATA(ptab) = VALUE abap\_parmbind\_tab(
    ( name = param
      kind  = cl\_abap\_objectdescr=>exporting
      value =  REF #( <fs> ) ) ).
ENDIF.
DATA oref TYPE REF TO object.
TRY.
    CREATE OBJECT oref TYPE (somecls) PARAMETER-TABLE ptab.
  CATCH cx\_sy\_create\_object\_error
        cx\_sy\_dyn\_call\_parameter\_error INTO DATA(exc).
    ...
ENDTRY.

This program can be executed in systems in which classes are declared as follows without raising exceptions.

CLASS any\_class DEFINITION.
  ...
ENDCLASS.
CLASS some\_class DEFINITION.
  PUBLIC SECTION.
    METHODS constructor IMPORTING para TYPE REF TO any\_class.
    ...
ENDCLASS.
CLASS some\_class IMPLEMENTATION.
  METHOD constructor.
    ...
  ENDMETHOD.
  ...
ENDCLASS.