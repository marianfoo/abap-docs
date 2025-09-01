  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [Changes in Release 6.40](javascript:call_link\('abennews-640.htm'\)) → 

Data Cluster in Release 6.40

[1\. New system class CL\_ABAP\_EXPIMP\_CONV](#!ABAP_MODIFICATION_1@1@)
[
2\. Conversion additions in IMPORT](#!ABAP_MODIFICATION_2@2@)
[
3\. Stricter structure check in IMPORT](#!ABAP_MODIFICATION_3@3@)

Modification 1

\- New system class CL\_ABAP\_EXPIMP\_CONV

The methods of class CL\_ABAP\_EXPIMP\_CONV convert the release-dependent internal formats of [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry").

Note

\- This change was also retransported to Release 6.20.

Modification 2

\- Conversion additions in IMPORT

The [conversion additions](javascript:call_link\('abapimport_conversion.htm'\)) ACCEPTING PADDING, ACCEPTING TRUNCATION and IGNORING STRUCTURE BOUNDARIES are now also possible in [IMPORT FROM SHARED BUFFER](javascript:call_link\('abapimport_medium.htm'\)).

Modification 3

\- Stricter structure check in IMPORT

The rule that structures and substructures (in the ACCEPTING PADDING addition) in a target structure in the [IMPORT](javascript:call_link\('abapimport_parameterlist.htm'\)) statement can have more components than the source structure, can lead to problems during reference to the structures defined in the ABAP Dictionary, if the structure is indicated there as extensible. As of Release 6.40, this situation can therefore cause a warning from the enhanced program check.