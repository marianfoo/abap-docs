  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [Changes in Release 7.0, EhP2](javascript:call_link\('abennews-71.htm'\)) → 

Further Changes in 7.0, EhP2

[1\. Lossless Assignments](#!ABAP_MODIFICATION_1@1@)

[2\. New RTTC Methods](#!ABAP_MODIFICATION_2@2@)

[3\. New API for Generating UUIDs](#!ABAP_MODIFICATION_3@3@)

[4\. New Time Formats](#!ABAP_MODIFICATION_4@4@)

[5\. String Constants in PXA](#!ABAP_MODIFICATION_5@5@)

[6\. Class for Generation Limits](#!ABAP_MODIFICATION_6@6@)

[7\. Splitter Control on Dynpros](#!ABAP_MODIFICATION_7@7@)

[8\. Extended Jump Distance](#!ABAP_MODIFICATION_8@8@)

[9\. Dynamic Programming](#!ABAP_MODIFICATION_9@9@)

[10\. File Interface](#!ABAP_MODIFICATION_10@10@)

Modification 1

Lossless Assignments

The new addition [EXACT](javascript:call_link\('abapmove_exact.htm'\)) of the statements [MOVE](javascript:call_link\('abapmove_obs.htm'\)) and [MOVE-CORRESPONDING](javascript:call_link\('abapmove-corresponding.htm'\)) enables [lossless assignments](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry"); if data is lost or values are invalid, an exception is raised.

Modification 2

New RTTC Methods

The new GET method of classes CL\_ABAP\_STRUCTDESCR, CL\_ABAP\_TABLEDESCR, CL\_ABAP\_REFDESCR, plus GET\_BY\_NAME of class CL\_ABAP\_REFDESCR return the type description object specified by the input parameters. A new type description object is generated or an existing one is used again.

Modification 3

New API for Generating UUIDs

The methods of class CL\_SYSTEM\_UUID generate [UUIDs](javascript:call_link\('abenuuid_glosry.htm'\) "Glossary Entry") in various formats, such as 16-character byte-like UUIDs, 22-character character-like UUIDs with upper and lower case letters, and 32-character character-like UUIDs in hexadecimal format. They also permit UUIDs to be converted to one another.

Modification 4

New Time Formats

While number and date formats for outputs have always been formatted according to the [formatting setting](javascript:call_link\('abencountry.htm'\)) of the [language environment](javascript:call_link\('abenlanguage_environment_glosry.htm'\) "Glossary Entry"), until now only the 24-hour format has been available for time outputs.

From SP14 in Release 7.0, four additional 12 hour formats have been introduced. These formats can be selected in the fixed values in the [user master record](javascript:call_link\('abenuser_master_record_glosry.htm'\) "Glossary Entry") or stored specifically for each country in a new column TIMEFM in the [T005X](javascript:call_link\('abencountry_formats.htm'\)) database table.

If enough space is available, a time is displayed on the dynpro in 12-hour format when the relevant settings are made in the user master record.

In ABAP, new formats can be used by means of the new [ENVIRONMENT TIME FORMAT](javascript:call_link\('abapwrite_to_options.htm'\)) addition of the WRITE TO and WRITE statements as well as by using the [environment](javascript:call_link\('abapcompute_string_format_options.htm'\)) and [COUNTRY](javascript:call_link\('abapcompute_string_format_options.htm'\)) formatting options for [embedded expressions](javascript:call_link\('abenstring_templates_expressions.htm'\)) in [character string templates](javascript:call_link\('abenstring_template_glosry.htm'\) "Glossary Entry").

The new class CL\_ABAP\_TIMEFM contains methods for converting between external and internal times, as well as some auxiliary methods.

The [predefined time formats](javascript:call_link\('abenwrite_formats.htm'\)) of the WRITE TO and WRITE statements cannot be influenced automatically due to downward compatibility.

Note

The new formats are supported on [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry")s and in [Screen Painter](javascript:call_link\('abenscreen_painter_glosry.htm'\) "Glossary Entry") from EhP2.

Modification 5

String Constants in PXA

From Release 7.0, EhP2, [strings](javascript:call_link\('abenstring_glosry.htm'\) "Glossary Entry") declared as constants are saved globally in [PXA](javascript:call_link\('abenpxa_glosry.htm'\) "Glossary Entry") in the same way as all constants. This can significantly reduce the amount of memory required.

Modification 6

Class for Generation Limits

From Release 7.0, EhP2, the static method GET\_VALUES of class CL\_ABAP\_GEN\_LIMITS returns the generation limits for an ABAP program.

Notes

This change was previously introduced in Release 7.0, SP16.

Modification 7

Splitter Control on Dynpros

From Release 7.0, EhP2, [splitter controls](javascript:call_link\('abendynp_splitter_control_spcl.htm'\)) can be used on classic dynpros. A splitter control enables two subscreens to be arranged above and below or beside one another in a way that allows the border between the subscreen areas to be adjusted.

Modification 8

Extended Jump Distance

Prior to Release 7.0, EhP2, errors could occur in ABAP programs in which jump distances were too large. This could also occur, for example, if processing blocks were exited with RETURN, since this statement jumps to the end of the block. From Release 7.0, EhP2, the jump distance is essentially unlimited.

Note

The unlimited jump distance should not be intentionally exploited. It enables errors to prevented in large procedures or control blocks, but the maximum recommended number of statements to be used in a procedure must always be adhered to as outlined in the programming guidelines.

Modification 9

Dynamic Programming

The documented class CL\_ABAP\_DYN\_PRG provides a set of static methods that support error-free, secure dynamic programming.

Modification 10

File Interface

The documented class CL\_FS\_PATH provides a set of static methods that support the error-free, secure handling of file names.