  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Obsolete Access to Data Clusters](javascript:call_link\('abendata_cluster_obsolete.htm'\)) → 

EXPORT, IMPORT, Short Form of the Parameter List

Obsolete Syntax

[EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)) dobj1 dobj2 ... TO [medium](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) *\[*COMPRESSION*{*ON*|*OFF*}**\]*.
[IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)) dobj1 dobj2 ...  FROM [medium](javascript:call_link\('abapimport_medium.htm'\)) *\[*[conversion\_options](javascript:call_link\('abapimport_conversion.htm'\))*\]*.

Effect

If the parameter lists of the statements [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)) or [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)) use the short form
dobj1 dobj2 ...
instead of
p1 = dobj1 p2 = dobj2 ...
or
p1 FROM*|*TO dobj1 p2 FROM*|*TO dobj2
the parameters are stored or searched for implicitly in the cluster under the name of the specified data object.

This short form is only allowed outside of classes and only if the name does not contain an address specified using an [instance component selector](javascript:call_link\('abeninstance_comp_selector_glosry.htm'\) "Glossary Entry") or an [offset/length specification](javascript:call_link\('abenoffset_length_specific_glosry.htm'\) "Glossary Entry"). If the short form is possible, it can be mixed with the correct form:

dobj1 p2 = dobj2 ...

This short form is prone to errors since the current name is used as an ID for the stored data. When imported into another context, the names of the exporting context must be known and specified identically.

Hint

If the parameter list is specified dynamically in an internal table ptab, the short form is also supported outside of classes by specifying a single-column table. Just like the static short form, this is now also obsolete.