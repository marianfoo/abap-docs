  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencreate_objects.htm) →  [SPA/GPA Parameters in the User Memory](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenspa_gpa.htm) → 

SET PARAMETER

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_parameter_shortref.htm)

Syntax

SET PARAMETER ID pid FIELD dobj.

Effect

This statement sets the content of the [SPA/GPA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenspa_gpa_parameter_glosry.htm "Glossary Entry") parameter specified in pid in the [user memory](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuser_memory_glosry.htm "Glossary Entry") to the content of the data object dobj. The ID pid expects a [flat](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenflat_glosry.htm "Glossary Entry") character-like field that can contain a maximum of 20 characters and not only blanks. pid is case-sensitive. dobj expects a flat character-like field whose binary content is passed unconverted.

The statement SET PARAMETER does not access the user memory directly. Instead, it accesses a local mapping of the SPA/GPA parameter in the [session memory](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenroll_area_glosry.htm "Glossary Entry"), which is loaded during rollup and saved in the user memory when rolled out (see [SPA/GPA Parameters and ABAP Programs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenspa_gpa.htm)). If the SPA/GPA parameter specified for the current user in pid does not yet exist in the [user memory](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuser_memory_glosry.htm "Glossary Entry"), it is created. If the SPA/GPA parameter already existed for the current user, its value is overwritten.

In a program, SPA/GPA parameters can only be created or filled with values that have a name in the table TPARA. If it is possible to statically determine that an ID specified pid is not in the database table TPARA, the extended program check reports an error.

Hints

-   An SPA/GPA parameter specified in pid must be entered in uppercase to match a name in the database table TPARA.
-   Since the statements SET PARAMETER and GET PARAMETER do not work directly with the SPA/GPA parameters of the user memory, they are only suitable for passing data within an [ABAP session](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_session_glosry.htm "Glossary Entry") and not for passing data between parallel ABAP sessions because programs that run in parallel can affect the state of the parameters in an uncontrolled manner.

Example

If the user selects one of the flight connections displayed in the basic list, the SPA/GPA parameters CAR and CON are set to the ID of the airline and the number of the connection at the event AT LINE-SELECTION. The names of both parameters are defined in the table TPARA for this purpose. In the initial [dynpro](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_glosry.htm "Glossary Entry") of the transaction DEMO\_TRANSACTION, two input fields are linked to these SPA/GPA parameters and are displayed with the selected values as [start values](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstart_value_glosry.htm "Glossary Entry").

DATA: carrier     TYPE spfli-carrid,
      connection  TYPE spfli-connid.
START-OF-SELECTION.
  SELECT carrid, connid
         FROM spfli
         INTO (@carrier, @connection).
    WRITE: / carrier HOTSPOT, connection HOTSPOT.
    HIDE:  carrier, connection.
  ENDSELECT.
AT LINE-SELECTION.
  SET PARAMETER ID: 'CAR' FIELD carrier,
                    'CON' FIELD connection.
  CALL TRANSACTION 'DEMO\_TRANSACTION'.

[Exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: Key only contains blank characters
    Runtime error: SET\_PARAMETER\_ID\_SPACE
-   Cause: Key is longer than 20 characters
    Runtime error: SET\_PARAMETER\_ID\_TOO\_LONG
-   Cause: Value is longer than 255 characters
    Runtime error: SET\_PARAMETER\_VALUE\_TOO\_LONG
-   Cause: Memory limit of the user memory was reached
    Runtime error: SET\_PARAMETER\_MEMORY\_OVERFLOW