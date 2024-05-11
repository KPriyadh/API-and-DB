PGDMP              
        |         	   MetroCard    16.2    16.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16626 	   MetroCard    DATABASE     �   CREATE DATABASE "MetroCard" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE "MetroCard";
                postgres    false            �            1259    16783    ticket    TABLE     �   CREATE TABLE public.ticket (
    "TicketID" integer NOT NULL,
    "FromLocation" character varying(250) NOT NULL,
    "ToLocation" character varying(250) NOT NULL,
    "TicketPrice" integer NOT NULL
);
    DROP TABLE public.ticket;
       public         heap    postgres    false            �            1259    16782    ticket_TicketID_seq    SEQUENCE     �   CREATE SEQUENCE public."ticket_TicketID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."ticket_TicketID_seq";
       public          postgres    false    220            �           0    0    ticket_TicketID_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."ticket_TicketID_seq" OWNED BY public.ticket."TicketID";
          public          postgres    false    219            �            1259    16773    travel    TABLE       CREATE TABLE public.travel (
    "TravelID" integer NOT NULL,
    "CardNumber" integer NOT NULL,
    "FromLocation" character varying(250) NOT NULL,
    "ToLocation" character varying(250) NOT NULL,
    "DateTravel" date NOT NULL,
    "TravelCost" integer NOT NULL
);
    DROP TABLE public.travel;
       public         heap    postgres    false            �            1259    16772    travel_TravelID_seq    SEQUENCE     �   CREATE SEQUENCE public."travel_TravelID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."travel_TravelID_seq";
       public          postgres    false    218            �           0    0    travel_TravelID_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."travel_TravelID_seq" OWNED BY public.travel."TravelID";
          public          postgres    false    217            �            1259    16764    userInfo    TABLE     �  CREATE TABLE public."userInfo" (
    "UserID" integer NOT NULL,
    "CardNumber" integer NOT NULL,
    "UserName" character varying(250) NOT NULL,
    "Email" character varying(250) NOT NULL,
    "Password" character varying(250) NOT NULL,
    "ConfirmPassword" character varying(250) NOT NULL,
    "PhoneNumber" character varying(250) NOT NULL,
    "UserBalance" numeric(10,2) NOT NULL
);
    DROP TABLE public."userInfo";
       public         heap    postgres    false            �            1259    16763    userInfo_UserID_seq    SEQUENCE     �   CREATE SEQUENCE public."userInfo_UserID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."userInfo_UserID_seq";
       public          postgres    false    216                        0    0    userInfo_UserID_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."userInfo_UserID_seq" OWNED BY public."userInfo"."UserID";
          public          postgres    false    215            \           2604    16786    ticket TicketID    DEFAULT     v   ALTER TABLE ONLY public.ticket ALTER COLUMN "TicketID" SET DEFAULT nextval('public."ticket_TicketID_seq"'::regclass);
 @   ALTER TABLE public.ticket ALTER COLUMN "TicketID" DROP DEFAULT;
       public          postgres    false    220    219    220            [           2604    16776    travel TravelID    DEFAULT     v   ALTER TABLE ONLY public.travel ALTER COLUMN "TravelID" SET DEFAULT nextval('public."travel_TravelID_seq"'::regclass);
 @   ALTER TABLE public.travel ALTER COLUMN "TravelID" DROP DEFAULT;
       public          postgres    false    218    217    218            Z           2604    16767    userInfo UserID    DEFAULT     x   ALTER TABLE ONLY public."userInfo" ALTER COLUMN "UserID" SET DEFAULT nextval('public."userInfo_UserID_seq"'::regclass);
 B   ALTER TABLE public."userInfo" ALTER COLUMN "UserID" DROP DEFAULT;
       public          postgres    false    216    215    216            �          0    16783    ticket 
   TABLE DATA           Y   COPY public.ticket ("TicketID", "FromLocation", "ToLocation", "TicketPrice") FROM stdin;
    public          postgres    false    220   b       �          0    16773    travel 
   TABLE DATA           t   COPY public.travel ("TravelID", "CardNumber", "FromLocation", "ToLocation", "DateTravel", "TravelCost") FROM stdin;
    public          postgres    false    218   �       �          0    16764    userInfo 
   TABLE DATA           �   COPY public."userInfo" ("UserID", "CardNumber", "UserName", "Email", "Password", "ConfirmPassword", "PhoneNumber", "UserBalance") FROM stdin;
    public          postgres    false    216                     0    0    ticket_TicketID_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."ticket_TicketID_seq"', 4, true);
          public          postgres    false    219                       0    0    travel_TravelID_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."travel_TravelID_seq"', 3, true);
          public          postgres    false    217                       0    0    userInfo_UserID_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."userInfo_UserID_seq"', 2, true);
          public          postgres    false    215            b           2606    16790    ticket ticket_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.ticket
    ADD CONSTRAINT ticket_pkey PRIMARY KEY ("TicketID");
 <   ALTER TABLE ONLY public.ticket DROP CONSTRAINT ticket_pkey;
       public            postgres    false    220            `           2606    16780    travel travel_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.travel
    ADD CONSTRAINT travel_pkey PRIMARY KEY ("TravelID");
 <   ALTER TABLE ONLY public.travel DROP CONSTRAINT travel_pkey;
       public            postgres    false    218            ^           2606    16771    userInfo userInfo_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."userInfo"
    ADD CONSTRAINT "userInfo_pkey" PRIMARY KEY ("UserID");
 D   ALTER TABLE ONLY public."userInfo" DROP CONSTRAINT "userInfo_pkey";
       public            postgres    false    216            �   D   x�3�t�,*�/*�tM��/J�45�2��y�W&�&���r�rs:�$楔!	�r� qf��qqq M��      �   R   x�3�4�t�,*�/*�tM��/J�4202�50�52�45�2�4�Ix�W&�&���B� ��)�1V3LtLu,@f��qqq �S�      �   _   x�]�;
�0E��e1af�Ѥ�`m3Z��ׯ����6W ��l��հ�8�~[��~�")4�	LD��1��#�����S���$��>O�s��S     