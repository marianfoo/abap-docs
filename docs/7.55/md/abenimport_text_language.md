  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [Data Cluster](javascript:call_link\('abendata_cluster.htm'\)) →  [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)) → 

IMPORT, Text Language Rule

The rule described in this section is relevant only in cases where structures defined in ABAP Dictionary in a [Unicode system](javascript:call_link\('abenunicode_system_glosry.htm'\) "Glossary Entry") are imported from the database and these same structures were exported in an [MDMP system](javascript:call_link\('abenmdmp-system_glosry.htm'\) "Glossary Entry"), and vice versa.

Character-like data can be stored in an MDMP system encoded according to different [code pages](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry"). The character set ID stored in [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)) is therefore not sufficient. For this reason, the statement [IMPORT FROM DATABASE](javascript:call_link\('abapimport_medium.htm'\)) is used for evaluating the [text language](javascript:call_link\('abentext_language_glosry.htm'\) "Glossary Entry") of database tables or structures defined in the ABAP Dictionary.

The following hierarchy applies to assignments of the text language to a structure:

1.  A component that is labeled as a text language in a substructure or table-like component with a structured line type is only valid for this substructure or internal table.
    
2.  A component labeled as a text language in a superordinate structure applies to this structure and to all other structures or table-like components nested in it, which do not have any components of their own that can be identified as a text language.
    
3.  If a component labeled as a text language is among the freely selected components of the [export/import tables](javascript:call_link\('abenexport_import_table_glosry.htm'\) "Glossary Entry") in which the data is stored, this determines the text language for all elementary fields, structures, and internal tables in the corresponding data cluster that do not have their own language.
    

When importing from structures stored in the database, the text language determines the code page used to handle the character-like components of a structure as follows:

-   Importing MDMP data into a Unicode system
    The code page of the imported data is determined using the text language from the database tables TCP0C (table of [text environments](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry")) and TCP0D (localization of the database). If no text language component is available, the character set ID stored during export is used.
    This rule is based on the assumption that the Unicode system has resulted from the conversion of an MDMP system. If it has not, this may lead to conversion errors.

-   Importing Unicode data into a MDMP system
    The imported data is handled according to the assignment of languages to code pages defined in the MDMP system, depending on the text language. If no text language component is available, the current [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is used.

Hint

Structures and internal tables with a structured line type that is based on types defined in the ABAP program do not have a text language. The character set ID stored during export is always used for these.