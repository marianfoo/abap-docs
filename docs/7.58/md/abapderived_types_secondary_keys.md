  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) →  [Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Secondary%20Table%20Keys%20for%20BDEF%20Derived%20Types%2C%20ABAPDERIVED_TYPES_SECONDARY_KEYS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20
for%20improvement:)

Secondary Table Keys for BDEF Derived Types

[Internal tables](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry") that are typed with [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry"), i. e. using [TYPE TABLE FOR ...](javascript:call_link\('abaptype_table_for.htm'\)), are [standard tables](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") with an empty [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry"). However, most of these internal tables have predefined [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry"). In this case, the secondary table keys are always [sorted keys](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry"). Currently, the following secondary table keys are available:

Secondary Table Key

Details

entity

The table key entity always includes the component [%key](javascript:call_link\('abapderived_types_key.htm'\)) and is available in all BDEF derived types that have %key as a component.

cid

The table key cid includes the components [%cid](javascript:call_link\('abapderived_types_cid.htm'\)) or [%cid\_ref](javascript:call_link\('abapderived_types_cid_ref.htm'\)). Depending on the BDEF derived type, the components can also include [%key](javascript:call_link\('abapderived_types_key.htm'\)) and [%pid](javascript:call_link\('abapderived_types_pid.htm'\)).

draft

The table key draft includes the component [%is\_draft](javascript:call_link\('abapderived_types_is_draft.htm'\)) and is only available in [draft](javascript:call_link\('abenbdl_with_draft.htm'\)) scenarios. Depending on the BDEF derived type, the components can also include [%pid](javascript:call_link\('abapderived_types_pid.htm'\)) and [%key](javascript:call_link\('abapderived_types_key.htm'\)).

pid

Only available in the context of [late numbering](javascript:call_link\('abenrap_late_numbering_glosry.htm'\) "Glossary Entry") scenarios. The table key pid includes the component [%pid](javascript:call_link\('abapderived_types_pid.htm'\)). Depending on the BDEF derived type, the components can also include [%tmp](javascript:call_link\('abapderived_types_tmp.htm'\)) and [%key](javascript:call_link\('abapderived_types_key.htm'\)).

Example

The following source code demonstrates the secondary keys of an internal table type with TYPE TABLE FOR CREATE and [table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry").

DATA create\_tab TYPE TABLE FOR CREATE demo\_managed\_root\_4.
create\_tab = VALUE #( %control-key\_field = if\_abap\_behv=>mk-on
                      %control-field1 = if\_abap\_behv=>mk-on
                      %control-field2 = if\_abap\_behv=>mk-on
                      %control-field3 = if\_abap\_behv=>mk-on
                      %control-field4 = if\_abap\_behv=>mk-on
                    ( %cid           = 'cid1'
                      %key-key\_field = 1
                      field1         = 'aaa'
                      field2         = 'bbb'
                      field3         = 11
                      field4         = 111 )
                    ( %cid           = 'cid2'
                      %key-key\_field = 2
                      field1         = 'ccc'
                      field2         = 'ddd'
                      field3         = 22
                      field4         = 222  ) ).
FINAL(line1) = create\_tab\[ KEY cid COMPONENTS %cid           = 'cid1'
                                              %key-key\_field = 1 \].
FINAL(line2) = create\_tab\[ KEY entity COMPONENTS %key-key\_field = 2 \].
cl\_demo\_output=>write( line1 ).
cl\_demo\_output=>write( line2 ).
cl\_demo\_output=>display( ).

Example

You can execute the class CL\_DEMO\_RAP\_DSPLY\_DER\_TYPE\_KS to explore multiple BDEF derived types ([TYPE TABLE FOR ...](javascript:call_link\('abaptype_table_for.htm'\))) and their keys.

The class makes use of three different RAP scenarios:

-   [RAP external numbering](javascript:call_link\('abenrap_ext_numbering_glosry.htm'\) "Glossary Entry") (non-draft and non-late numbering)
-   [Late numbering](javascript:call_link\('abenbdl_late_numbering.htm'\)) (non-draft)
-   [Draft](javascript:call_link\('abenbdl_with_draft.htm'\))

The example is based on dummy [BDEFs](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") and [behavior pools (ABP)](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") that just serve the purpose of including many specifications to display a variety of BDEF derived types:

Scenario

Data model

BDEF

ABP

RAP external numbering

Root entity: DEMO\_MANAGED\_ROOT\_TEST
Child entity: DEMO\_MANAGED\_CHILD\_TEST

DEMO\_MANAGED\_ROOT\_TEST

BP\_DEMO\_MANAGED\_ROOT\_TEST

Late numbering

Root entity: DEMO\_MANAGED\_ROOT\_TEST\_LN
Child entity: DEMO\_MANAGED\_CHILD\_TEST\_LN

DEMO\_MANAGED\_ROOT\_TEST\_LN

BP\_DEMO\_MANAGED\_ROOT\_TEST\_LN

Draft

Root entity: DEMO\_MANAGED\_ROOT\_TEST\_DT
Child entity: DEMO\_MANAGED\_CHILD\_TEST\_DT

DEMO\_MANAGED\_ROOT\_TEST\_DT

BP\_DEMO\_MANAGED\_ROOT\_TEST\_DT

Hints

-   Since variables cannot be declared with many of the BDEF derived types outside of the implementation class, the global class contains variables that are typed with various BDEF derived types. The methods get\_keys, get\_keys\_ln, and get\_keys\_dt in the respective classes are responsible for providing the key tables.
-   The availability of secondary keys varies depending on the specification in the BDEF, for example, draft is only available for draft scenarios. pid is only available for late numbering scenarios.
-   E in the KEY\_KIND field means empty key. U means user-defined key.