---
title: "Syntax"
description: |
  ... PARAMETER-TABLE ptab EXCEPTION-TABLE etab. Effect The additions PARAMETER-TABLE and EXCEPTION-TABLE are used to pass actual parameters dynamically to the instance constructor or assign return codes to the non-class-based exceptions. These additions can only be used if the instant
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object_para_tables.htm"
abapFile: "abapcreate_object_para_tables.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "internal-table", "abapcreate", "object", "para", "tables"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencreate_objects.htm) →  [CREATE OBJECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CREATE%20OBJECT%2C%20parameter_tables%2C%20ABAPCREATE_OBJECT_PARA_TABLES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CREATE OBJECT, parameter\_tables

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object_shortref.htm)

Syntax

... *\[*PARAMETER-TABLE ptab*\]*
    *\[*EXCEPTION-TABLE etab*\]*.

Effect

The additions PARAMETER-TABLE and EXCEPTION-TABLE are used to pass actual parameters dynamically to the instance constructor or assign return codes to the non-class-based exceptions.

These additions can only be used if the instantiated class is specified dynamically in name. They use special internal tables ptab and etab to assign actual parameters to the input parameters of the instance constructor or return codes to the non-class-based exceptions.

The syntax and semantics are the same as in the dynamic method calls using the statement [CALL METHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_dynamic.htm). The internal tables ptab and etab in particular must be defined with reference to the tables abap\_parmbind\_tab and abap\_excpbind\_tab from the [type pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentype_pool_glosry.htm "Glossary Entry") ABAP.

Example

Dynamic creation of a [Control Framework](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencontrol_framework_glosry.htm "Glossary Entry") (CFW) dialog box and dynamic passing of input parameters to the instance constructor of the global class CL\_GUI\_DIALOGBOX\_CONTAINER. The class is defined explicitly using the addition [TYPE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object_explicit.htm).

DATA: container TYPE REF TO cl\_gui\_container,
      exc\_ref   TYPE REF TO cx\_root.
DATA: class TYPE string VALUE \`CL\_GUI\_DIALOGBOX\_CONTAINER\`,
      ptab  TYPE abap\_parmbind\_tab.
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
    cl\_demo\_output=>display( exc\_ref->get\_text( ) ).
ENDTRY.

Example

The following program section dynamically creates an object of a class SOME\_CLASS whose instance constructor expects a reference variable of the static type ANY\_CLASS. The program has correct syntax, but the object is created only in systems in which the classes also exist.

CONSTANTS:
  anycls  TYPE string VALUE \`ANY\_CLASS\`,
  somecls TYPE string VALUE \`SOME\_CLASS\`,
  param   TYPE string VALUE \`PARA\`.
DATA dref TYPE REF TO data.
TRY.
    CREATE DATA dref TYPE REF TO (anycls).
    CREATE OBJECT dref->\* TYPE (anycls).
  CATCH cx\_sy\_create\_data\_error
        cx\_sy\_create\_object\_error.
    ...
ENDTRY.
IF dref IS BOUND.
  FINAL(ptab) = VALUE abap\_parmbind\_tab(
    ( name  = param
      kind  = cl\_abap\_objectdescr=>exporting
      value =  REF #( dref->\* ) ) ).
ENDIF.
DATA oref TYPE REF TO object.
TRY.
    CREATE OBJECT oref TYPE (somecls) PARAMETER-TABLE ptab.
  CATCH cx\_sy\_create\_object\_error
        cx\_sy\_dyn\_call\_parameter\_error INTO FINAL(exc).
    ...
ENDTRY.