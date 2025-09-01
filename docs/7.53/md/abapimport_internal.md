  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [Data Cluster](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_cluster.htm) →  [IMPORT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_data_cluster.htm) → 

IMPORT - Internal Additions

Internal Additions

These additions are for internal use only.
Do not use them in application programs.

Extras:

[1\. ... FROM LOGFILE ID key](#!ABAP_ADDITION_1@1@)
[2\. ... USING subr*\[*(prog)*\]*](#!ABAP_ADDITION_2@2@)

Addition 1

... FROM LOGFILE ID key

Effect

Imports data objects from update data records. key expects the update key that was assigned by the system (with sequential request number). If the update key specified does not exist in the database table VBDATA, the runtime error IMPORT\_UNEXPECTED\_END\_OF\_DATA occurs.

Addition 2

... USING subr*\[*(prog)*\]*

Effect

This addition can be specified for [IMPORT FROM DATABASE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_medium.htm) if a table work area dbtab is declared for the relevant database table using [TABLES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptables.htm). The addition TO wa is not permitted. The data is not imported from the database table. Instead, the subroutine subr is called. In the subroutine, the first row of a data cluster must be provided in the table work area dbtab as it would be read from the database. The subroutine is then called automatically as often as required until a complete data cluster has been imported. The table work area dbtab has to be filled accordingly in every call. If no correct data cluster is provided, the behavior is undefined and exceptions may be raised. If the addition USING subr is used, the return code sy-subrc is set to the value 0 or 4. It is set to the value 4 if it has a value other than 0 when the subroutine is exited.

The subroutine must either be defined in the same program or in a program, prog, specified explicitly. Its name must be prefixed with the name of the database table ("dbtab"). The subroutine must have a USING parameter of type any, which is currently not supplied.

Notes

-   FROM DATABASE ... USING is not intended for external use; instead, TO INTERNAL TABLE is used.
    
-   Specifying an external program prog is the same as the obsolete variant of [PERFORM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapperform_obsolete.htm).
    

Example

Exports a data cluster into an internal table instead of a database table. After that, imports from the internal table

TABLES demo\_indx\_table.
DATA demo\_indx\_tab TYPE TABLE OF demo\_indx\_table.
SELECT \*
       FROM sflight
       INTO TABLE @DATA(sflight\_tab).
EXPORT sflight\_tab TO DATABASE demo\_indx\_table(fl) ID 'FLIGHTS'
       USING demo\_indx\_table\_export.
...
demo\_indx\_table-srtf2 = 0.
IMPORT sflight\_tab FROM DATABASE demo\_indx\_table(fl) ID 'FLIGHTS'
       USING demo\_indx\_table\_import.
...
FORM demo\_indx\_table\_export USING foo.
  APPEND demo\_indx\_table TO demo\_indx\_tab.
ENDFORM.
FORM demo\_indx\_table\_import USING foo.
  demo\_indx\_table = demo\_indx\_tab\[ srtf2 = demo\_indx\_table-srtf2 \].
  demo\_indx\_table-srtf2 = demo\_indx\_table-srtf2 + 1.
ENDFORM.