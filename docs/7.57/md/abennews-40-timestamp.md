  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [News for Release 4.0](javascript:call_link\('abennews-40.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Time Stamps in Release 4.0, ABENNEWS-40-TIMESTAMP, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

Time Stamps in Release 4.0

When time stamps were introduced in ABAP in Release 4.0, special attention was paid to the following:

-   Making the time stamp meaningful to a user in his or her particular time zone
-   Making objects uniquely identifiable by their time stamp by guaranteeing a higher level of precision

A current time stamp can be created in an ABAP program using the new variant [GET TIME STAMP FIELD f](javascript:call_link\('abapget_time-stamp.htm'\)). It is always globally unique since it is stored in [UTC](javascript:call_link\('abenutc_glosry.htm'\) "Glossary Entry") time (Universal Time Coordination, previously Greenwich Mean Time) and not in local time.
A time stamp can be generated with normal precision (to one second), or accurate to around one microsecond (1E-6 seconds).

To convert the time stamp to local time or to ABAP time and date format (data type T or D), the following variants should be used:
[CONVERT TIME STAMP tst INTO *\[*DATE*|*TIME*\]* ...](javascript:call_link\('abapconvert_time-stamp.htm'\))
and
[WRITE tst TIME ZONE tz](javascript:call_link\('abapwrite_to_options.htm'\))
See also:
[Time Stamps in Packed Numbers](javascript:call_link\('abentime_stamps_packed.htm'\))