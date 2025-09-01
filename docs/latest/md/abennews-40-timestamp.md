  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 4.xx](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-4.htm) →  [News for ABAP Release 4.0](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-40.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Time%20Stamps%20in%20ABAP%20Release%204.0%2C%20ABENNEWS-40-TIMESTAMP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Time Stamps in ABAP Release 4.0

When time stamps were introduced in ABAP in ABAP release 4.0, special attention was paid to the following:

-   Making the time stamp meaningful to a user in his or her particular time zone
-   Making objects uniquely identifiable by their time stamp by guaranteeing a higher level of precision

A current time stamp can be created in an ABAP program using the new variant [GET TIME STAMP FIELD f](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_time-stamp.htm). It is always globally unique since it is stored in [UTC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenutc_glosry.htm "Glossary Entry") time (Universal Time Coordination, previously Greenwich Mean Time) and not in local time.

A time stamp can be generated with normal precision (to one second), or accurate to around one microsecond (1E-6 seconds).

To convert the time stamp to local time or to ABAP time and date format (data type T or D), the following variants should be used:

[CONVERT TIME STAMP tst INTO *\[*DATE*|*TIME*\]* ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapconvert_time-stamp.htm)

and

[WRITE tst TIME ZONE tz](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_options.htm)

See also:

[Time Stamps in Packed Numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_stamps_packed.htm)