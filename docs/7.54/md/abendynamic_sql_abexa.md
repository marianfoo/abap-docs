  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_reading.htm) →  [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) → 

SELECT, Dynamic Token Specification

This example demonstrates how tokens are specified dynamically in ABAP SQL for the statement [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm).

Source Code

REPORT demo\_dynamic\_sql.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    CONSTANTS left TYPE tabname VALUE 'SFLIGHT'.
    TYPES whitelist     TYPE HASHED TABLE OF string
                             WITH UNIQUE KEY table\_line.
    DATA: right    TYPE tabname VALUE 'SPFLI',
          select   TYPE TABLE OF edpline,
          sublist  TYPE edpline,
          from     TYPE string,
          first\_on TYPE abap\_bool VALUE abap\_true,
          tref     TYPE REF TO data.
    FIELD-SYMBOLS <itab> TYPE STANDARD TABLE.
    cl\_demo\_input=>request(
      EXPORTING text  = \`Right Table of Join\`
      CHANGING  field = right ).
    DATA(whitelist) =  VALUE whitelist( ( \`SPFLI\` )
                                        ( \`SCARR\` )
                                        ( \`SAPLANE\` ) ).
    TRY.
        right = cl\_abap\_dyn\_prg=>check\_whitelist\_tab(
                  val = to\_upper( right )
                  whitelist = whitelist ).
      CATCH cx\_abap\_not\_in\_whitelist.
        cl\_demo\_output=>write(
          \`Only the following tables are allowed:\` ).
        cl\_demo\_output=>display( whitelist ).
        LEAVE PROGRAM.
    ENDTRY.
    first\_on = abap\_true.
    CLEAR select.
    CLEAR sublist.
    CLEAR from.
    READ CURRENT LINE LINE VALUE INTO right.
    DATA(comp\_tab1) =
      CAST cl\_abap\_structdescr( cl\_abap\_typedescr=>describe\_by\_name(
                                  left ) )->get\_components( ).
    DATA(comp\_tab2) =
      CAST cl\_abap\_structdescr( cl\_abap\_typedescr=>describe\_by\_name(
                                  right ) )->get\_components( ).
    DELETE comp\_tab1 WHERE name = 'MANDT'.
    DELETE comp\_tab2 WHERE name = 'MANDT'.
    from = left && \` join \` && right && \` on \`.
    LOOP AT comp\_tab1 INTO DATA(comp1) WHERE name IS NOT INITIAL.
      sublist = left && '~' && comp1-name && ','.
      APPEND sublist TO select.
    ENDLOOP.
    LOOP AT comp\_tab2 INTO DATA(comp2) WHERE name IS NOT INITIAL.
      TRY.
          comp1 = comp\_tab1\[ KEY primary\_key name = comp2-name \].
          IF first\_on = abap\_false.
            from = from && \` and \`.
          ELSE.
            first\_on = abap\_false.
          ENDIF.
          from = from && left  && \`~\` && comp2-name &&
                \` = \` && right && \`~\` && comp2-name.
        CATCH cx\_sy\_itab\_line\_not\_found.
          APPEND comp2 TO comp\_tab1.
          sublist = right && '~' && comp2-name && ','.
          APPEND sublist TO select.
      ENDTRY.
    ENDLOOP.
    DATA(struct\_type) = cl\_abap\_structdescr=>create( comp\_tab1 ).
    DATA(table\_type) = cl\_abap\_tabledescr=>create( struct\_type ).
    CREATE DATA tref TYPE HANDLE table\_type.
    ASSIGN tref->\* TO <itab>.
    ASSIGN select\[ lines( select ) \] TO FIELD-SYMBOL(<comp>).
    REPLACE \`,\` IN <comp>  WITH \`\`.
    TRY.
        SELECT (select) FROM (from) INTO TABLE @<itab>.
        cl\_demo\_output=>display( <itab> ).
      CATCH cx\_sy\_dynamic\_osql\_syntax
            cx\_sy\_dynamic\_osql\_semantics INTO DATA(exc).
        cl\_demo\_output=>display( exc->get\_text( ) ).
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Once the program has started, the name of one of the database tables SPFLI, SCARR, or SAPLANE can be entered. The table entered is then associated with the table SFLIGHT in accordance with its foreign key dependency. This assumes that all fields with the same name have a foreign key relationship with each other.

The selected table name is assigned to the field right. The RTTS class CL\_ABAP\_TYPEDESCR is used to determine the type description for the columns in the left and right table of the join. The method GET\_COMPONENTS is used to store these in two type description tables comp\_tab1 or comp\_tab2, which contain an entry for each column of the database table in question.

Then, a fragment of the FROM clause is created, which contains the names of the tables to be joined; the FROM clause is later completed using the ON conditions.

All columns of the left table should be entered in the SELECT list, as well as those columns of the right table for which no columns with the same name exist in the left table. The content of the type description tables is processed in loops.

Initially, the columns of the left table are processed. The current column is incorporated first into the dynamic SELECT list, which should be specified in the internal table select. The column name comp1-name is prefixed with the table name in left, to ensure its uniqueness. The statement MOVE-CORRESPONDING is used to copy the column description from comp\_tab1 to an internal table comp\_tab\_join whose type is suitable for creating the objects later.

The columns of the right table are searched in the left table. If the column comp2-name only exists in the right table, it is, for the time being, incorporated into the type description table comp\_tab\_join. After that, it is added to all columns of the left table of the SELECT list select, just like before.

If the column in comp2-name exists in both tables, an ON condition that compares columns with the same name from the left and the right table, is added to the dynamic FROM clause from.

The type description table comp\_tab\_join and the static method CREATE of the class CL\_ABAP\_STRUCTDESCR can now be used to create a matching type description object for the structure of the target area of the statement SELECT. This type description object could now be specified after the addition TYPE HANDLE of the statement CREATE DATA to create a structured work area. However, the next step uses the method CREATE of the class CL\_ABAP\_TABLEDESCR to create a type description object for an internal table of this row type and creates this table using CREATE DATA. The assignment of the dynamically created internal tables to a field symbol <itab> creates a name for the internal table that is usable in the INTO clause of the statement SELECT. Direct specification of a dereferencing tref->\* in statements other than ASSIGN is only possible if tref is not generically typed. However, in our example, tref is generically typed with TYPE REF TO data.

Subsequently, the data is read with a fully dynamic statement SELECT. The content of the internal table <itab> is displayed.

Security Note

If used wrongly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before being used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the predefined function [escape](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenescape_functions.htm).