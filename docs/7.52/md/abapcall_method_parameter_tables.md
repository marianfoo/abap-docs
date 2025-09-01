  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_procedures.htm) →  [Method Calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethod_calls.htm) →  [Dynamic Method Call](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethod_calls_dynamic.htm) →  [CALL METHOD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_dynamic.htm) → 

CALL METHOD - parameter\_tables

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_shortref.htm)

Syntax

... *\[*PARAMETER-TABLE ptab*\]*
    *\[*EXCEPTION-TABLE etab*\]*.

Extras:

[1\. ... PARAMETER-TABLE ptab](#!ABAP_ADDITION_1@1@)
[2\. ... EXCEPTION-TABLE etab](#!ABAP_ADDITION_2@2@)

Effect

In [dynamic method calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_dynamic.htm), these additions assign actual parameters and exceptions to the formal parameters and non-class-based exceptions respectively, using the special internal tables ptab and etab.

Addition 1

... PARAMETER-TABLE ptab

Effect

PARAMETER-TABLE can be used to assign actual parameters to all formal parameters of a dynamically called method. ptab expects a [hashed table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhashed_table_glosry.htm "Glossary Entry") of table type ABAP\_PARMBIND\_TAB or of row type ABAP\_PARMBIND from the [type group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentype_group_1_glosry.htm "Glossary Entry") ABAP. When the statement CALL METHOD is executed, the table must contain exactly one row for each non-optional formal parameter. This row is optional for each optional formal parameter. The columns of the table are as follows:

-   NAME of type c and length 30
    Specifies the name of the formal parameter in question in uppercase. If a nonexistent formal parameter is specified, a handleable exception is raised.
    
-   KIND of type c of length 1.
    Specifies the category of the formal parameter. This column is used to check the interface. The category of the formal parameter is determined in the declaration of the called method. If KIND is initial, no check is executed. If KIND contains the value of a constant EXPORTING, IMPORTING, CHANGING, or RECEIVING of the class CL\_ABAP\_OBJECTDESCR, a check is made (from the perspective of the caller). This check determines whether the formal parameter specified in NAME is an input parameter, output parameter, input/output parameter, or a return code. If an error occurs, the handleable exception CX\_SY\_DYN\_CALL\_ILLEGAL\_TYPE is raised.
    
-   VALUE of type REF TO data
    Used as a pointer to an appropriate actual parameter. The data object pointed to by the reference variable in VALUE is assigned to the formal parameter specified in NAME.
    

The column NAME is the unique key of the table ptab.

Addition 2

... EXCEPTION-TABLE etab

Effect

EXCEPTION-TABLE can be used to assign return codes to all [non-class-based exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions_non_class.htm) of a dynamically called method. etab expects a [hashed table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhashed_table_glosry.htm "Glossary Entry") of table type ABAP\_EXCPBIND\_TAB or of row type ABAP\_EXCPBIND from the [type group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentype_group_1_glosry.htm "Glossary Entry") ABAP. When the statement CALL METHOD is executed, this table can contain exactly one row for every non-class-based exception of the method. The columns of the table are as follows:

-   NAME of type c and length 30
    Specifies the name of the respective exception or [OTHERS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_parameters.htm) in uppercase.
    
-   VALUE of type i
    Specifies the number value available in sy-subrc after the exception specified in NAME is raised.
    

The column NAME is the unique key of table etab.

Example

Dynamic method call with parameter and exception table.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS meth IMPORTING  p TYPE string
                       EXCEPTIONS e.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD meth.
    cl\_demo\_output=>write( p ).
    RAISE e.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  DATA(class) = \`CLS\`.
  DATA(meth) = \`METH\`.
  DATA(ptab) = VALUE abap\_parmbind\_tab(
    ( name  = 'P'
      kind  = cl\_abap\_objectdescr=>exporting
      value = REF #( \`Hello method!\` ) ) ).
  DATA(ptab) = VALUE abap\_parmbind\_tab(
    ( name = 'E' value = 4 ) ).
  CALL METHOD (class)=>(meth)
    PARAMETER-TABLE ptab
    EXCEPTION-TABLE etab.
  IF sy-subrc <> 0.
    cl\_demo\_output=>display( \`Exception caught ...\` ).
  ENDIF.