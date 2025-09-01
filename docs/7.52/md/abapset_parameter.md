  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [Parameters in the User Memory](javascript:call_link\('abenmemory.htm'\)) → 

SET PARAMETER

[Quick Reference](javascript:call_link\('abapset_parameter_shortref.htm'\))

Syntax

SET PARAMETER ID pid FIELD dobj.

Effect

This statement sets the content of the [SPA/GPA](javascript:call_link\('abenspa_gpa_parameter_1_glosry.htm'\) "Glossary Entry") parameter specified in pid [user memory](javascript:call_link\('abenuser_memory_glosry.htm'\) "Glossary Entry") to the content of the data object dobj. The ID pid must be a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") character-like field that contains no more than 20 characters and does not consist solely of blanks. pid is case-sensitive. dobj expects a flat character-like field whose binary content is passed in an unconverted format.

The statement GET PARAMETER does not access the user memory directly. Instead, it accesses a local mapping of the SPA/GPA parameter in the [program memory](javascript:call_link\('abenroll_area_glosry.htm'\) "Glossary Entry"), which is loaded when rolled in and saved in the user memory when rolled out (see [SPA/GPA Parameters and ABAP Programs](javascript:call_link\('abenmemory.htm'\))). If the SPA/GPA parameter specified for the current user in pid does not yet exist in the [user memory](javascript:call_link\('abenuser_memory_glosry.htm'\) "Glossary Entry"), it is created. If the SPA/GPA parameter has already been created for the current user, its value is overwritten.

In a program, SPA/GPA parameters can only be created or assigned values if a name exists for them in the table TPARA. If it is known statically that an ID pid is not in the database table TPARA, the extended program check reports an error.

Notes

-   An SPA/GPA parameter specified in pid must be entered in uppercase to match a name in the database table TPARA.
    
-   The statements SET PARAMETER and GET PARAMETER do not work directly with the SPA/GPA parameters of the user memory, which means that they are only suitable for passing data within a single [ABAP session](javascript:call_link\('abenmain_session_glosry.htm'\) "Glossary Entry") and not for passing data between two main sessions in parallel. This is because programs that run in parallel can change the state of the parameters unpredictably.
    

Example

If the user selects a flight displayed in the basic list, the SPA/GPA parameters CAR and CON are set to the ID of the airline and the number of the connection at the event ATLINE-SELECTION. The names of both parameters are defined in the table TPARA for this purpose. In the initial [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") of the transaction DEMO\_TRANSACTION, two input fields are associated with these SPA/GPA parameters and are displayed with the selected values as [start values](javascript:call_link\('abenstart_value_glosry.htm'\) "Glossary Entry").

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

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause:: Key only contains blank characters
    Runtime error: SET\_PARAMETER\_ID\_SPACE
    
-   Cause: Key is longer than 20 characters
    Runtime error: SET\_PARAMETER\_ID\_TOO\_LONG
    
-   Cause: Value is longer than 255 characters
    Runtime error: SET\_PARAMETER\_VALUE\_TOO\_LONG
    
-   Cause: Memory limit of the user memory was reached
    Runtime error: SET\_PARAMETER\_MEMORY\_OVERFLOW