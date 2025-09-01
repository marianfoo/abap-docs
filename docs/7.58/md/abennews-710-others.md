  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-70_ehps.htm) →  [News for ABAP Release 7.0, EhP2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-71.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Further%20Changes%20in%207.0%2C%20EhP2%2C%20ABENNEWS-710-OTHERS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Further Changes in 7.0, EhP2

[1\. Lossless Assignments](#!ABAP_MODIFICATION_1@1@)
[2\. New RTTC Methods](#!ABAP_MODIFICATION_2@2@)
[3\. New API for Creating UUIDs](#!ABAP_MODIFICATION_3@3@)
[4\. New Time Formats](#!ABAP_MODIFICATION_4@4@)
[5\. String Constants in PXA](#!ABAP_MODIFICATION_5@5@)
[6\. Class for Generation Limits](#!ABAP_MODIFICATION_6@6@)
[7\. Splitter Control on Dynpros](#!ABAP_MODIFICATION_7@7@)
[8\. Extended Jump Distance](#!ABAP_MODIFICATION_8@8@)
[9\. Dynamic Programming](#!ABAP_MODIFICATION_9@9@)
[10\. File Interface](#!ABAP_MODIFICATION_10@10@)

Modification 1   

Lossless Assignments

The new addition [EXACT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmove_exact.htm) of the statements [MOVE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmove_obs.htm) and [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmove-corresponding.htm) enables [lossless assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlossless_assignment_glosry.htm "Glossary Entry"); if data is lost or values are invalid, an exception is raised.

Modification 2   

New RTTC Methods

The new GET method of classes CL\_ABAP\_STRUCTDESCR, CL\_ABAP\_TABLEDESCR, CL\_ABAP\_REFDESCR, plus GET\_BY\_NAME of class CL\_ABAP\_REFDESCR return the type description object specified by the input parameters. A new type description object is created or an existing one is used again.

Modification 3   

New API for Creating UUIDs

The methods of the class CL\_SYSTEM\_UUID create [UUIDs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuuid_glosry.htm "Glossary Entry") in different formats, such as 16-digit byte-like UUIDs, 22-digit character-like UUIDs with uppercase and lowercase letters, and 32-digit character-like UUIDs in hexadecimal. They also make it possible to convert the UUIDs from one type to another.

Modification 4   

New Time Formats

While number and date formats for output have always been formatted according to the [formatting setting](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencountry.htm) of the [language environment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlanguage_environment_glosry.htm "Glossary Entry"), until now only the 24-hour format has been available for time output.

From SP14 in ABAP release 7.0, four additional 12 hour formats have been introduced. These formats can be selected in the fixed values in the [user master record](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuser_master_record_glosry.htm "Glossary Entry") or stored specifically for each country in a new column TIMEFM in the [T005X](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencountry_formats.htm) database table.

If enough space is available, a time is displayed on the dynpro in 12-hour format when the relevant settings are made in the user master record.

In ABAP, new formats can be used by means of the new [ENVIRONMENT TIME FORMAT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite_to_options.htm) addition of the WRITE TO and WRITE statements as well as by using the [environment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcompute_string_format_options.htm) and [COUNTRY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcompute_string_format_options.htm) formatting options for [embedded expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_templates_expressions.htm) in [string templates](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_template_glosry.htm "Glossary Entry").

The new class CL\_ABAP\_TIMEFM contains methods for converting between external and internal times, as well as some auxiliary methods.

The [predefined time formats](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwrite_formats.htm) of the statements WRITE TO and WRITE cannot be affected automatically due to downward compatibility.

Hint

The new formats are supported on [dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_glosry.htm "Glossary Entry") and in [Screen Painter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenscreen_painter_glosry.htm "Glossary Entry") from EhP2.

Modification 5   

String Constants in PXA

From ABAP release 7.0, EhP2, [strings](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_glosry.htm "Glossary Entry") declared as constants are saved globally in [PXA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpxa_glosry.htm "Glossary Entry") in the same way as all constants. This can significantly reduce the amount of memory required.

Modification 6   

Class for Generation Limits

From ABAP release 7.0, EhP2, the static method GET\_VALUES of class CL\_ABAP\_GEN\_LIMITS returns the generation limits for an ABAP program.

Hint

This change was previously introduced in ABAP release 7.0, SP16.

Modification 7   

Splitter Control on Dynpros

From ABAP release 7.0, EhP2, [splitter controls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynp_splitter_control_spcl.htm) can be used on classic dynpros. A splitter control enables two subscreens to be arranged above and below or beside one another in a way that allows the border between the subscreen areas to be adjusted.

Modification 8   

Extended Jump Distance

Prior to ABAP release 7.0, EhP2, errors could occur in ABAP programs in which jump distances were too large. This could also occur, for example, if processing blocks were exited with RETURN, since this statement jumps to the end of the block. From ABAP release 7.0, EhP2, the jump distance is essentially unlimited.

Hint

The unlimited jump distance should not be intentionally exploited. It enables errors to prevented in large procedures or control blocks, but the maximum recommended number of statements to be used in a procedure must always be adhered to as outlined in the programming guidelines.

Modification 9   

Dynamic Programming

The documented class CL\_ABAP\_DYN\_PRG provides a set of static methods that support error-free, secure dynamic programming.

Modification 10   

File Interface

The documented class CL\_FS\_PATH provides a set of static methods that support the error-free, secure handling of file names.