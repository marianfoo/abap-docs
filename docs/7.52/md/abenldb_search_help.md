  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (Obsolete)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb.htm) →  [Logical Databases - Components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_oview.htm) →  [Logical Databases - Further Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_others.htm) → 

Logical Databases - Associated with Search Helps

A logical database can be associated with a suitable [search help](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensearch_help_glosry.htm "Glossary Entry"). The best type of search help for a logical database depends on the content of the database. For example, if a logical database is created to read vendor records, one output field of the search help must be the vendor number. The logical database is provided with the content of the search help output fields and uses it to perform the actual reads on the database tables.

To enable the user to use the search help, the a special parameter with the addition [AS SEARCH PATTERN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapparameters_ldb.htm) must be declared in the selection include. The selection screen then displays the Selection by Search Help box, including input fields for the search help ID and the search string. There is also a pushbutton for complex search helps and multiple selection is permitted for every individual field.

The runtime environment is responsible for interpreting the user input on the selection screen and reading the value list from the database. These rows are passed to the database program in the internal table ldb\_sp and the subroutine put\_ldb\_sp is called for the root node instead of the subroutine put\_node. Here, ldb is the name of the logical database. The value list in the internal table ldb\_sp is used to enable this subroutine to read the actual data and raise the event GET for the root node using the statement PUT. It is often useful to call the subroutine put\_node for the root node from put\_ldb\_sp. The subroutine then selects the data and raises the associated GET event using PUT. The structure of the internal table ldb\_sp and other automatically generated tables is displayed as a comment in the database program source code. The source code also contains documentation about how to use these tables.

The options provided by [dynamic selections](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_free_selections.htm) and [field selections](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_field_selections.htm) should also be exploited when using search helps to access the database. Search helps can also be used to improve performance. The internal tables get\_events, sp\_fields, and sp\_tables plus the structure sp\_events can be used to program different database reads in the database program, depending on which tables and fields are used and filled. For example, it is possible to use views or joins and collect the read records in internal tables and thereby process the internal tables at a later time and raise the GET events in question.

Example

An imaginary logical database ZZF with the root node KNA1 is associated with the search help DEBI. The selection include DBZZFSEL contains the following lines:

SELECT-OPTIONS skunnr FOR kna1-kunnr.
PARAMETERS p\_sp AS SEARCH PATTERN FOR NODE kna1.

The source text of the database program now contains further comment lines, indicating that the following tables and fields were created:

-   Internal table zzf\_sp in accordance with the following declaration:

DATA: BEGIN OF zzf\_sp OCCURS 1000,
         kunnr             LIKE kna1-kunnr,
       END   OF zzf\_sp.

The search help selections of the user create a hitlist in the filled output fields of the search help. This hit list is passed to the database program in the table zzf\_sp.

-   Internal table sp\_fields in accordance with the following declaration:

DATA: BEGIN OF sp\_fields OCCURS 10.
        INCLUDE STRUCTURE rsspfields.
DATA: END   OF sp\_fields.

If a collective search help is associated with the logical database, an elementary search help usually only fills some of the output fields of the collective search help. The table sp\_fields tells the program which fields these are. The component supplied is non-initial whenever the search help passes a value to the field in fieldname.

-   Internal table sp\_tables in accordance with the following declaration:

DATA: BEGIN OF sp\_tables OCCURS 10.
        INCLUDE STRUCTURE rssptabs.
DATA: END   OF sp\_tables.

If the search help contains fields from different tables, the table sp\_tables tells the program which tables are covered by the search help. The component supplied is non-initial whenever the search help passes a value to the table in tablename.

-   Character-like data object sp\_events with the length 200.

Each character in sp\_tables stands for a node in the structure of the logical database (for example, the first character stands for the root node). The content of the individual items has the following meaning for the node in question:

-   "X2: Node is addressed in the application program using the statement GET and the search help assigned values for the key fields to sp\_ldb.

-   "R": Node is addressed in the application program using the statement GET, but the search help did not assign values for the key fields to sp\_ldb.

-   "M": Node is not addressed in the application program using the statement GET, but the search help assigned values for the key fields to sp\_ldb.

-   " ": Table is not addressed in the application program using the statement GET and the search help did not assign values for the key fields to sp\_ldb.

If the user selects all vendors in the search help on the selection screen whose sort field starts with "ABC" and this applies to the customer numbers 17, 125, and 230 , the tables above are filled as follows:

zzf\_sp

kunnr

17

125

230

sp\_fields

fieldname

supplied

KUNNR

X

sp\_tables

tablename

supplied

KNA1

X

The subroutine put\_zzf\_sp (in comments) can now, for example, be modified and activated as follows to use the data records from the internal table zzf\_sp:

FORM put\_zzf\_sp.
  CASE sp\_events(1).
    WHEN 'X' OR 'M'.
      PERFORM put\_kna1\_Ssp
    WHEN OTHERS.
      PERFORM put\_kna1.
  ENDCASE.
ENDFORM.
FORM put\_kna1\_sp.
  SELECT \* FROM kna1 FOR ALL ENTRIES IN zzf\_sp
                     WHERE kunnr = zzf\_sp\_kunnr.
    PUT kna1.
  ENDSELECT.
ENDFORM.

The table get\_events is used to check whether the application program contains a GET statement for KNA1 or whether the search help has assigned appropriate values for key fields. If this is the case, put\_kna1\_sp is called, which executes a SELECT loop across KNA1 to read the rows that match the key fields in zzf\_sp. The statement PUT kna1 is executed in the SELECT loop. Another option would be as follows:

FORM put\_zzf\_sp.
  IF sp\_everts(1) NE abap\_false
    CLEAR skunnr.
    REFRESH skunnr.
    skunnr-sign = 'I'.
    skunnr-option = 'EQ'.
    LOOP AT zzf\_sp.
      skunnt-low = zzf\_sp-kunnr.
      APPEND skunnr TO skunnr.
    ENDLOOP.
  ENDIF.
  READ TABLE GET\_EVENTS WITH KEY 'KNA1'.
  IF sy-subrc = 0 AND get\_events-kind IS NOT INITIAL.
    PERFORM put\_kunnr.
  ENDIF.
ENDFORM.

This deletes the selection table skunnr for KNA1 and fills it with values from zzf\_sp. The table get\_events is used to check whether the application program contains a GET statement for KNA1. If this is the case, the subroutine put\_kunnr is called. Here, the data from KNA1 is read as specified by the selection table skunnr and PUT kna1 is executed.